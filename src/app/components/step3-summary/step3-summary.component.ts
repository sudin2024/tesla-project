import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { CarService } from "../../services/car.service";
import { Subscription } from "rxjs";
import { CarFullModel, Color } from "../../models/car.model";

@Component({
  selector: "app-step3-summary",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./step3-summary.component.html",
  styleUrl: "./step3-summary.component.scss",
})
export class Step3SummaryComponent implements OnInit, OnDestroy {
  carFullDetais: CarFullModel = {} as CarFullModel;
  subscription: Subscription = new Subscription();
  colorDescription!: Color | undefined;
  selectedTowHitchValue: number = 0;
  selectedYokeValue: number = 0;
  totalPrice: number = 0;

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.getCarStepData();
  }

  getCarStepData() {
    this.subscription = this.carService.carStepData.subscribe((res) => {
      if (Object.keys(res).length) {
        console.log("res step 3 >>>>>>>>>", res);
        this.carFullDetais = res;
        this.getCarDetails(res);
      }
    });
  }

  getCarDetails(data: CarFullModel) {
    this.colorDescription =
      this.carFullDetais.selectedModel &&
      this.carFullDetais.selectedModel?.colors.find(
        (item) => item.code == data.selectedColorValue
      );
    this.selectedTowHitchValue = data.selectedTowHitch ? 1000 : 0;
    this.selectedYokeValue = data.selectedYoke ? 1000 : 0;
    this.totalPrice =
      this.totalPrice +
      (data.selectedConfig ? data.selectedConfig?.price : 0) +
      (this.colorDescription ? this.colorDescription.price : 0) +
      this.selectedTowHitchValue +
      this.selectedYokeValue;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
