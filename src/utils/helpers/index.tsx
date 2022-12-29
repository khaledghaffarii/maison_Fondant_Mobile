import { RootStackParamList } from '../types';

export const getStoredValues = async (): Promise<keyof RootStackParamList> => {
	try {
		return 'InitialConfig';
	} catch (error) {
		console.log(error);
		return 'Landing';
	}
};


// export const getCountryImage = (iso: string) => {
//   switch (iso) {
//     case "TN":
//       return (
//         <Image
//           source={images.tn}
//           style={{ height: 25, width: 25, borderRadius: 10 }}
//         />
//       );

//     case "SA":
//       return (
//         <Image
//           source={images.ksa}
//           style={{ height: 25, width: 25, borderRadius: 10 }}
//         />
//       );

//     default:
//       return icons.earth();
//   }
// };

// export const handleBackButton = () => {
//   Alert.alert(
//     t("ExitAppAlertTitle"),
//     t("ExitAppAlertMessage"),
//     [
//       {
//         text: t("Cancel"),
//         onPress: () => {},
//         style: "cancel",
//       },
//       {
//         text: t("Exit"),
//         onPress: () => BackHandler.exitApp(),
//       },
//     ],
//     {
//       cancelable: true,
//     }
//   );

//   return true;
// };

// export const handleChangeStatus = (
//   code: string,
//   status: string,
//   id: string
// ) => {
//   Alert.alert(
//     t("Change Status"),
//     t(
//       "Do you confirm changing the status of the reparation with code " +
//         code +
//         " to become " +
//         t(status)
//     ),
//     [
//       {
//         text: t("Cancel"),
//         onPress: () => {},
//         style: "cancel",
//       },
//       {
//         text: t("Change"),
//         onPress: () =>
//           ReparationsService.getInstance().setReparationStatus(id, status),
//       },
//     ],
//     {
//       cancelable: true,
//     }
//   );
// };

// export const handleLogout = (onConfirm: Function) => {
//   Alert.alert(
//     t("Logout"),
//     t("LogoutAlertMessage"),
//     [
//       {
//         text: t("Cancel"),
//         onPress: () => {},
//         style: "cancel",
//       },
//       {
//         text: t("Logout"),
//         onPress: () => onConfirm(),
//       },
//     ],
//     {
//       cancelable: true,
//     }
//   );

//   return true;
// };

// export const verifyPhoneNumber = (phone: string) => {
//   if (
//     CurrentUserService.getInstance().getCurrentUserCountry().phoneCode == "216"
//   ) {
//     return phone && phone.length == 8;
//   } else {
//     return phone && phone.length == 10;
//   }
// };
// export const verifyEmail = (email: string) => {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// };

// export function removeItem<T>(arr: Array<T>, value: T): Array<T> {
//   const index = arr.indexOf(value);
//   if (index > -1) {
//     arr.splice(index, 1);
//   }
//   return arr;
// }

// export const formatDateTime = (date: string) => {
//   return (
//     new Date(date).toDateString() +
//     " " +
//     new Date(date).getHours() +
//     ":" +
//     new Date(date).getMinutes()
//   );
// };
