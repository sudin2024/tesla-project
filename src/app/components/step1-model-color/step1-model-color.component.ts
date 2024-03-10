import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CarService } from "../../services/car.service";
import { CarFullModel, Color, Model } from "../../models/car.model";
import { Subscription, subscribeOn } from "rxjs";

@Component({
  selector: "app-step1-model-color",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./step1-model-color.component.html",
  styleUrl: "./step1-model-color.component.scss",
})
export class Step1ModelColorComponent implements OnInit, OnDestroy {
  modelColorForm!: FormGroup;
  modelLists: Model[] = [];
  colorLists: Color[] = [];
  selectedCarModelValue!: string;
  selectedCarColorlValue!: string;
  selectedCarModel: Model | undefined = {} as Model;
  generatedCarImage!: string;
  subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private carService: CarService) {}

  ngOnInit() {
    this.fetchModelData();
  }

  createModelColorForm() {
    this.modelColorForm = this.fb.group({
      carModel: [""],
      carColor: [""],
    });
  }

  fetchModelData() {
    this.subscription = this.carService.getModel().subscribe((res) => {
      if (res) {
        this.modelLists = res;
      }
    });
    this.getCarStepData();
  }

  onChange(identifire: string) {
    /* if (identifire == "model") {
      this.modelColorForm.get("carColor")?.reset();
    } */
    this.setFormValue();
    this.setCarStepData();
  }

  getCarStepData() {
    this.createModelColorForm();
    this.subscription = this.carService.carStepData.subscribe((res) => {
      if (Object.keys(res).length) {
        // console.log("car details step 1 ...........>", res);
        this.setFormValue(res);
        this.modelColorForm.patchValue({
          carModel: res.selectedModelValue,
          carColor: res.selectedColorValue,
        });
      }
    });
  }

  setFormValue(preData?: CarFullModel) {
    this.selectedCarModelValue = preData?.selectedModelValue
      ? preData.selectedModelValue
      : this.modelColorForm.get("carModel")?.value;
    this.selectedCarColorlValue = preData?.selectedColorValue
      ? preData.selectedColorValue
      : this.modelColorForm.get("carColor")?.value;
    this.selectedCarModel = preData?.selectedModel
      ? preData.selectedModel
      : this.modelLists.find((item) => item.code == this.selectedCarModelValue);
    this.generatedCarImage = preData?.selectedImage
      ? preData.selectedImage
      : `https://interstate21.com/tesla-app/images/${this.selectedCarModelValue}/${this.selectedCarColorlValue}.jpg`;
  }

  setCarStepData() {
    const carData: CarFullModel = {
      selectedModel: this.selectedCarModel,
      selectedModelValue: this.selectedCarModelValue,
      selectedColorValue: this.selectedCarColorlValue,
      selectedImage: this.generatedCarImage,
    };
    this.carService.setCarStepData(carData);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
