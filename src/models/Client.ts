export class Client {
  public id?: string;
  public name?: string;
  public phone?: string;
  public email?: string;
  public address?: string;
  public is_mall?: boolean;
  public is_franchise?: boolean;

  constructor(json: any) {
    if (typeof json == "object") {
      if ("_id" in json) {
        this.id = json._id;
      }

      if ("name" in json) {
        this.name = json.name;
      }
      if ("phone" in json) {
        this.phone = json.phone;
      }
      if ("email" in json) {
        this.email = json.email;
      }
      if ("address" in json) {
        this.address = json.address;
      }
      if ("is_mall" in json) {
        this.is_mall = json.is_mall;
      }
      if ("is_franchise" in json) {
        this.is_franchise = json.is_franchise;
      }
    }
  }

  public static Empty() {
    return new Client({});
  }
}
