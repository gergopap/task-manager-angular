export class AppModel {
  constructor(
    public title?: string,
    public checked = false,
    public category?: string,
    public text?: string
  ) {
  }
}