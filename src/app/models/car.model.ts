export interface Model {
  code: string;
  colors: Color[];
  description: string;
}

export interface Color {
  code: string;
  description: string;
  price: number;
}

export interface configModel {
  configs: configsOptionModel[];
  towHitch: boolean;
  yoke: boolean;
}
export interface configsOptionModel {
  description: string;
  id: number;
  price: number;
  range: number;
  speed: number;
}

export interface CarFullModel {
  selectedModel: Model | undefined;
  selectedModelValue: string;
  selectedColorValue: string;
  selectedImage: string;
  selectedConfig?: configsOptionModel;
  selectedTowHitch?: boolean;
  selectedYoke?: boolean;
  selectedConfigId?: number;
}
