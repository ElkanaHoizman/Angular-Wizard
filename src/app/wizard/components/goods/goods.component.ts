import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable, from } from "rxjs";
import { startWith, map } from "rxjs/operators";
import { Goods } from "../../models/goods.model";
import { GoodsService } from "../../services/goods.service";

@Component({
  selector: "app-goods",
  templateUrl: "./goods.component.html",
  styleUrls: ["./goods.component.scss"]
})
export class GoodsComponent implements OnInit {
  @Input() stepperGoods;

  public goods: Goods;
  myControl = new FormControl();

  origins: string[] = [];
  passages: string[] = [];
  categories: string[] = [];
  unitMeasures: string[] = [];
  Ingredients: string[] = [];

  originsOptions: Observable<string[]>;
  passagesOptions: Observable<string[]>;
  CategoriesOptions: Observable<string[]>;
  unitMeasuresOptions: Observable<string[]>;
  IngredientsOptions: Observable<string[]>;

  constructor(
    private _goodsService: GoodsService,
    private _cdRef: ChangeDetectorRef
  ) {
    this.goods = new Goods();
  }

  ngOnInit() {
    this.get();
    this.autocomplete();
  }
  ngAfterViewInit() {
    this._cdRef.detectChanges();
  }
  sendGoods() {
    localStorage.setItem("goods", JSON.stringify(this.goods));

    this.stepperGoods.selectedIndex = 2;
  }

  private _filter(value: string, type): string[] {
    const filterValue = value.toLowerCase();
    return type.filter(option => option.includes(filterValue));
  }

  autocomplete() {
    this.originsOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(origin =>
        origin && origin.length >= 2 ? this._filter(origin, this.origins) : []
      )
    );
    this.passagesOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(passage =>
        passage && passage.length >= 2
          ? this._filter(passage, this.passages)
          : []
      )
    );

    this.CategoriesOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(categorie =>
        categorie && categorie.length >= 2
          ? this._filter(categorie, this.categories)
          : []
      )
    );
    this.unitMeasuresOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(measures =>
        measures && measures.length >= 2
          ? this._filter(measures, this.unitMeasures)
          : []
      )
    );
    this.IngredientsOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(Ingredient =>
        Ingredient && Ingredient.length >= 2
          ? this._filter(Ingredient, this.Ingredients)
          : []
      )
    );
  }
  // get  api
  get() {
    this._goodsService.getOrigins().subscribe(origin => {
      Object.keys(origin).forEach(key => {
        this.origins.push(origin[key].title);
      });
    });
    this._goodsService.getPassages().subscribe(passage => {
      Object.keys(passage).forEach(key => {
        this.passages.push(passage[key].title);
      });
    });
    this._goodsService.getCategories().subscribe(categorie => {
      Object.keys(categorie).forEach(key => {
        this.categories.push(categorie[key].title);
      });
    });
    this._goodsService.getunitMeasures().subscribe(unitMeasure => {
      Object.keys(unitMeasure).forEach(key => {
        this.unitMeasures.push(unitMeasure[key].title);
      });
    });
    this._goodsService.getIngredients().subscribe(getIngredient => {
      Object.keys(getIngredient).forEach(key => {
        this.Ingredients.push(getIngredient[key].title);
      });
    });
  }
}
