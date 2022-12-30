import { StyleSheet, View, ScrollView, Text } from "react-native";
import React, { Fragment, useEffect, useState } from "react";
import { LandingScreenProps } from "../../../utils/types";
import CustomButton from "../../../components/CustomButton";
import { BarChart } from "react-native-chart-kit";
import { Layout } from "../../../utils/device";
import { icons } from "../../../utils/icons";
import { RecipeService } from "../../../services/RecipeService";

function numberWithCommas(x: number) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
function range(size: number, startAt: number = 0): ReadonlyArray<number> {
  return [...Array(size).keys()].map((i) => i + startAt);
}
export default function LandingScreen(props: LandingScreenProps) {
  const [recipe, setRecipe] = useState(0);
  const [data, setData] = useState({
    labels: ["août", "sept", "oct", "nov", "déc"],
    datasets: [
      {
        data: [50, 40, 90, 150, 100],
      },
    ],
  });
  const current_year = new Date().getFullYear();

  const months_fr = [
    "janv",
    "févr",
    "mars",
    "avrl",
    "mai",
    "juin",
    "juil",
    "août",
    "sept",
    "oct",
    "nov",
    "déc",
  ];

  const getMonthlyData = async () => {
    const current_month = new Date().getMonth() + 1;
    const recipeData = [];
    const recipeLabels = [];
    for (var month of range(5, current_month - 4)) {
      const data = await RecipeService.getInstance().getMonthlyRecipe(
        current_year,
        month
      );
      recipeData.push(data.amount ?? 0);
      recipeLabels.push(months_fr[month - 1]);
    }
    return { recipeData, recipeLabels };
  };

  useEffect(() => {
    getMonthlyData().then(({ recipeData, recipeLabels }) => {
      const _data = {
        labels: recipeLabels,
        datasets: [
          {
            data: recipeData,
          },
        ],
      };
      //setData(_data);
    });

    // construct the data object

    RecipeService.getInstance()
      .getYearlyRecipe(current_year)
      .then((data) => {
        setRecipe(data.amount);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.incomeCard}>
        <View style={styles.sectionHeader}>
          <View style={styles.iconContainer}>
            <>{icons.dashboard_icon("white")}</>
          </View>
          <Text style={{ fontFamily: "AllerLight", fontSize: 30 }}>
            Revenue/mois
          </Text>
        </View>

        <View style={styles.totalAmountContainer}>
          <Text style={styles.totalAmountTitle}>Montant total</Text>
          <View style={styles.totalAmountNumberContainer}>
            <Text style={styles.totalAmountNumber}>
              {numberWithCommas(recipe)}
            </Text>
            <View style={styles.currencyContainer}>
              <Text style={styles.cureencyText}>TND</Text>
            </View>
          </View>
        </View>
        <BarChart
          data={data}
          width={Layout.window.width * 0.8}
          height={350}
          style={{ paddingRight: 0, marginTop: 25 }}
          yAxisLabel=""
          xAxisLabel=""
          yAxisSuffix=""
          showBarTops={false}
          withHorizontalLabels={false}
          withVerticalLabels
          showValuesOnTopOfBars
          fromZero
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#fff",
            fillShadowGradientOpacity: 1,
            fillShadowGradientToOpacity: 1,
            backgroundGradientTo: "#fff",
            barRadius: 10,
            labelColor: (opacity) => "gray",

            formatTopBarValue: (val) => {
              if (val) return val + "$";
            },
            barPercentage: 1.2,
            propsForBackgroundLines: {
              strokeWidth: "0",
            },
            color: (opacity = 1) => `rgba(96, 211, 156,1)`,
          }}
        />
      </View>
      <View style={styles.flowCard}>
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: "#e6f2e2",
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
          }}
        >
          {icons.arrowDown("#62D39D")}
        </View>
        <Text style={styles.flowTitleText}>Revenue</Text>
        <Text
          style={[styles.flowTitleText, { position: "absolute", right: 0 }]}
        >
          {numberWithCommas(recipe)}
        </Text>
      </View>
      <View style={styles.flowCard}>
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: "#ffe1dd",
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
          }}
        >
          {icons.arrowUp("#ff5a5a")}
        </View>
        <Text style={styles.flowTitleText}>Dépenses</Text>
        <Text
          style={[styles.flowTitleText, { position: "absolute", right: 0 }]}
        >
          {numberWithCommas(1100500)}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  incomeCard: {
    marginVertical: 15,
    width: Layout.window.width * 0.9,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 15,
    alignSelf: "center",
  },
  flowCard: {
    marginVertical: 7,
    width: Layout.window.width * 0.9,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 15,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  flowTitleText: {
    fontFamily: "AllerBold",
    fontSize: 22,
    marginHorizontal: 15,
  },
  iconContainer: {
    height: 35,
    aspectRatio: 1,
    borderRadius: 35,
    backgroundColor: "#C8DFFF",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  totalAmountContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  totalAmountTitle: {
    fontFamily: "AllerLight",
    fontSize: 18,
    color: "gray",
    margin: 25,
  },
  totalAmountNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  currencyContainer: {
    padding: 5,
    backgroundColor: "#FFD88D",
    borderRadius: 8,
    marginHorizontal: 10,
  },
  cureencyText: {
    fontFamily: "AllerLight",
    fontSize: 20,
  },
  totalAmountNumber: {
    fontFamily: "AllerBold",
    fontSize: 26,
  },
});
