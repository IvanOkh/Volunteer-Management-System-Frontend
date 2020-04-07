export class EventModel {
  constructor(
    public id: number,
    public name: string,
    public address: string,
    public description: string,
    public coordinator: string,
    public date: string,
    public startTime: string,
    public endTime: string
  ) {}
}
