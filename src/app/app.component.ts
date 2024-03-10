import { Component, OnInit } from "@angular/core";
import { AsyncPipe, JsonPipe } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CarService } from "./services/car.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  step2Disable: boolean = true;
  step3Disable: boolean = true;

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.getCarStepData();
  }
  getCarStepData() {
    this.carService.carStepData.subscribe((res) => {
      if (Object.keys(res).length) {
        this.step2Disable = res.selectedColorValue ? false : true;
        this.step3Disable = res.selectedConfigId ? false : true;
      }
    });
  }
}
