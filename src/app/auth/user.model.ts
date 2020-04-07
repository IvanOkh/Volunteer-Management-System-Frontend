export class User {
  constructor(
    public email: string,
    public id: string,
    public role: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  //check if token is expired
  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
