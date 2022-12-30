export class Recipe {
  public id?: string;
  public amount?: number;

  constructor(json: any) {
    if (typeof json == "object") {
      if ("_id" in json) {
        this.id = json._id;
      }

      if ("Total Recipe" in json) {
        this.amount = json["Total Recipe"];
      }

      if ("totalPurchase" in json) {
        this.amount = json["totalPurchase"];
      }
    }
  }

  public static Empty() {
    return new Recipe({});
  }
}
