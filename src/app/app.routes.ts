import { Routes } from "@angular/router";
import { Step1ModelColorComponent } from "./components/step1-model-color/step1-model-color.component";
import { Step2ConfigOptionsComponent } from "./components/step2-config-options/step2-config-options.component";
import { Step3SummaryComponent } from "./components/step3-summary/step3-summary.component";

export const routes: Routes = [
  { path: "", redirectTo: "step1", pathMatch: "full" },
  { path: "step1", component: Step1ModelColorComponent },
  { path: "step2", component: Step2ConfigOptionsComponent },
  { path: "step3", component: Step3SummaryComponent },
  { path: "**", redirectTo: "step1" },
];
