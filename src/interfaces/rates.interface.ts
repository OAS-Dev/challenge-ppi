export interface Rates {
  date: Date;
  base: string;
  rates: {[key: string]: number};
}
