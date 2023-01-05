import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  ActivityIndicator,
} from "react-native";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { LandingScreenProps } from "../../../utils/types";
import LottieView from "lottie-react-native";
import { BarChart } from "react-native-chart-kit";
import { Layout } from "../../../utils/device";
import { icons } from "../../../utils/icons";
import { RecipeService } from "../../../services/RecipeService";
import SelectDropdown from "react-native-select-dropdown";
import { loadingSplash } from "../../../../assets/splash/splash";

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
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  });
  /** Example
   * const [data, setData] = useState({
    labels: ["janv", "févr", "mars", "avrl", "mai"],
    datasets: [
      {
        data: [1500, 3400, 2000, 2200, 1800],
      },
    ],
  });
   */

  const [staticData, setStaticData] = useState({
    labels: ["Categorie 1", "Categorie 2", "Categorie 3"],
    datasets: [
      {
        data: [120, 80, 99],
      },
    ],
  });
  const getYears = (startYear: number) => {
    var currentYear = new Date().getFullYear(),
      years = [];
    while (startYear <= currentYear) {
      years.push(startYear++);
    }
    return years;
  };
  const years = getYears(new Date().getFullYear() - 2);
  const [currentYear, setCurrentYear] = useState(years[years.length - 1]);

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

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const getMonthlyData = async () => {
    const recipeData = [];
    const recipeLabels = [];
    for (var month of range(5, currentMonth)) {
      let monthnum = month % 12 == 0 ? 11 : (month % 12) - 1;
      const data = await RecipeService.getInstance().getMonthlyRecipe(
        currentYear,
        monthnum
      );
      recipeData.push(data.amount ?? 0);
      recipeLabels.push(months_fr[monthnum]);
    }
    return { recipeData, recipeLabels };
  };

  useEffect(() => {
    setisLoading(true);
    RecipeService.getInstance()
      .getMonthlyRecipe(currentYear, currentMonth - 1)
      .then((data) => {
        if (data.amount) {
          setRecipe(data.amount);
        } else {
          setRecipe(0);
        }
      });

    getMonthlyData().then(({ recipeData, recipeLabels }) => {
      const _data = {
        labels: recipeLabels,
        datasets: [
          {
            data: recipeData,
          },
        ],
      };
      setData(_data);
      setisLoading(false);
    });
  }, [currentMonth, currentYear]);
  const animation = useRef<LottieView>(null);
  const [isLoading, setisLoading] = useState(false);
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.incomeCard}>
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

          <View style={styles.sectionHeader}>
            <View style={styles.iconContainer}>
              <>{icons.dashboard_icon("white")}</>
            </View>
            <Text style={{ fontFamily: "AllerLight", fontSize: 30 }}>
              Entrées
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <SelectDropdown
              onChangeSearchInputText={() => {}}
              data={years}
              defaultValue={currentYear}
              onSelect={(selectedItem, index) => {
                setCurrentYear(selectedItem);
              }}
              dropdownStyle={{
                borderRadius: 15,
                borderColor: "#743f1c",
                borderWidth: 1,
              }}
              buttonStyle={{
                width: 125,
                borderRadius: 15,
                marginHorizontal: 15,
                borderColor: "#743f1c",
                borderWidth: 1,
                backgroundColor: "transparent",
              }}
              buttonTextStyle={{
                fontFamily: "AllerLight",
              }}
            />
            <SelectDropdown
              onChangeSearchInputText={() => {}}
              data={months_fr}
              defaultValue={months_fr[new Date(Date.now()).getMonth()]}
              onSelect={(selectedItem, index) => {
                setCurrentMonth(months_fr.indexOf(selectedItem) + 1);
              }}
              buttonStyle={{
                width: 125,
                borderRadius: 15,
                borderColor: "#743f1c",
                borderWidth: 1,
                backgroundColor: "transparent",
              }}
              buttonTextStyle={{
                fontFamily: "AllerLight",
              }}
              dropdownStyle={{
                borderRadius: 15,
                borderColor: "#743f1c",
                borderWidth: 1,
              }}
            />
          </View>
          <BarChart
            data={data}
            width={Layout.window.width * 0.8}
            height={300}
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
          <Text style={styles.flowTitleText}>Revenue annuel</Text>
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
            {numberWithCommas(0)}
          </Text>
        </View>

        <View style={styles.incomeCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.iconContainer}>
              <>{icons.dashboard_icon("white")}</>
            </View>
            <Text style={{ fontFamily: "AllerLight", fontSize: 30 }}>
              Sorties
            </Text>
          </View>
          <View style={{ transform: [{ rotate: "90deg" }], marginTop: 25 }}>
            <BarChart
              data={staticData}
              width={Layout.window.width * 0.85}
              height={Layout.window.width * 0.85}
              style={{
                paddingRight: 0,
                paddingLeft: 0,
                height: 300,
                width: 400,
              }}
              yAxisLabel=""
              xAxisLabel=""
              yAxisSuffix=""
              verticalLabelRotation={-90}
              showBarTops={false}
              withHorizontalLabels={false}
              withVerticalLabels
              fromZero
              chartConfig={{
                backgroundColor: "#fff",
                backgroundGradientFrom: "#fff",
                fillShadowGradientOpacity: 1,
                fillShadowGradientToOpacity: 1,
                propsForVerticalLabels: {
                  translateX: -38,
                  translateY: -25,
                },
                backgroundGradientTo: "#fff",
                barRadius: 15,
                labelColor: (opacity) => "gray",

                formatTopBarValue: (val) => {
                  if (val) return val + "$";
                },
                barPercentage: 1.6,
                propsForBackgroundLines: {
                  strokeWidth: "0",
                },
                color: (opacity = 1) => `#2280FF`,
              }}
            />
          </View>
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
          zIndex: isLoading ? 99 : -1,
        }}
      >
        {isLoading && (
          <View
            style={{
              height: 55,
              width: 55,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator color={"#743f1c"} size="large" />
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5F5F5",
  },
  incomeCard: {
    marginVertical: 15,
    width: Layout.window.width * 0.9,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 15,
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
    fontSize: 17,
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
    marginTop: 10,
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
    marginHorizontal: 25,
    marginVertical: 15,
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
