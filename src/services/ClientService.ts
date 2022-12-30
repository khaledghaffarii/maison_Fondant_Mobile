import axios from "axios";
import { apiAdress } from "../utils/constants";
import { CLIENTS, PRODUCTS } from "../utils/api";
import { Client } from "../models/Client";

export class ClientsService {
  static _instance: ClientsService;

  static getInstance(): ClientsService {
    if (!ClientsService._instance) {
      ClientsService._instance = new ClientsService();
    }

    return ClientsService._instance!;
  }
  async getAllClients() {
    try {
      const { data } = await axios.get(apiAdress.baseUrl + CLIENTS.ALL, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const _clients = [];

      for (var x in data) {
        _clients.push(new Client(data[x]));
      }
      return _clients;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Client Service axios error message: ", error.message);
      } else {
        console.log("Client Service unexpected error: ", error);
      }
    }
  }
}
