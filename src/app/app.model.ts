export class AppModel {
  constructor(
    public title?: string,
    public checked = false,
    public category?: string,
    public text?: string
  ) {
    Object.keys(category);
  }
}
export enum category {
  BILLING = 'BILLING',
  HOUSE = 'HOUSE',
  SHOPPING = 'SHOPPING',
  TRAVEL = 'TRAVEL'
}