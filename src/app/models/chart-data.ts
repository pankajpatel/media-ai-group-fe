export interface ChartData {
  label: string;
  fill: boolean;
  data: Array<Number>;
  borderColor: string;
  percentage?: Number;
}

export interface GraphData {
  labels: Array<string>;
}
