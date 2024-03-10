import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { CarFullModel, Model, configModel } from "../models/car.model";

@Injectable({
  providedIn: "root",
})
export class CarService {
  constructor(private http: HttpClient) {}

  private carStepData$ = new BehaviorSubject<CarFullModel>({} as CarFullModel);
  get carStepData() {
    return this.carStepData$.asObservable();
  }
  getModel(): Observable<Model[]> {
    return this.http.get<Model[]>("/models");
  }

  setCarStepData(_data: CarFullModel) {
    this.carStepData$.next(_data);
  }

  getCarConfig(modelCode: string): Observable<configModel> {
    return this.http.get<configModel>(`/options/${modelCode}`);
  }
}
