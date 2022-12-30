import axios from "axios";
import { apiAdress } from "../utils/constants";
import { OUTPUTS, PRODUCTS } from "../utils/api";
import { Recipe } from "../models/Recipe";
import { Output } from "../models/Output";

export class RecipeService {
  static _instance: RecipeService;

  static getInstance(): RecipeService {
    if (!RecipeService._instance) {
      RecipeService._instance = new RecipeService();
    }

    return RecipeService._instance!;
  }
  async getYearlyRecipe(year: number) {
    try {
      const { data } = await axios.get(
        apiAdress.baseUrl + OUTPUTS.YEARLY_RECIPE(year),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return new Recipe(data[0]);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Recipe Service axios error message: ", error.message);
      } else {
        console.log("unexpected error in Recipe Service: ", error);
      }
    }
  }

  async getMonthlyRecipe(year: number, month: number) {
    try {
      const { data } = await axios.get(
        apiAdress.baseUrl + OUTPUTS.MONTHLY_RECIPE(year, month),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return new Recipe(data[0]);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Recipe Service axios error message: ", error.message);
      } else {
        console.log("unexpected error in Recipe Service: ", error);
      }
    }
  }

  async getOutputs() {
    try {
      const { data } = await axios.get(apiAdress.baseUrl + OUTPUTS.ALL, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const _outputs = [];

      for (var x in data) {
        _outputs.push(new Output(data[x]));
      }
      return _outputs;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Recipe Service axios error message: ", error.message);
      } else {
        console.log("unexpected error in Recipe Service: ", error);
      }
    }
  }
}
