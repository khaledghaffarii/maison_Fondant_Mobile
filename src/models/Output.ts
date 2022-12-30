import { Products } from "./Products";

export class Output {
  public id?: string;
  public customer_name?: string;
  public products?: Products[];
  public total_paid?: number;
  public customer_adresse?: string;
  public billed?: boolean;
  public delivery_note_sent?: boolean;
  public date?: string;

  constructor(json: any) {
    if (typeof json == "object") {
      if ("_id" in json) {
        this.id = json._id;
      }

      if ("customer_name" in json) {
        this.customer_name = json.customer_name;
      }
      if ("products" in json) {
        const _products = [];
        for (var x in json.products) {
          _products.push(new Products(json.products[x]));
        }
        this.products = _products;
      }
      if ("total_paid" in json) {
        this.total_paid = json.total_paid;
      }
      if ("customer_adresse" in json) {
        this.customer_adresse = json.customer_adresse;
      }
      if ("billed" in json) {
        this.billed = json.billed;
      }
      if ("delivery_note_sent" in json) {
        this.delivery_note_sent = json.delivery_note_sent;
      }
      if ("date" in json) {
        this.date = json.date;
      }
    }
  }

  public static Empty() {
    return new Output({});
  }
}
