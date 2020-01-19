import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"]
})
export class SummaryComponent implements OnInit {
    @Input() stepperSummary;

  details: object;
  goods: object;

  constructor() {}

  ngOnInit() {}

  summary() {
    this.details = [JSON.parse(localStorage.getItem("details"))];
    this.goods = [JSON.parse(localStorage.getItem("goods"))];

  }
  move(index: number, stepper) {
    this.stepperSummary.selectedIndex = index ;
  }
}
