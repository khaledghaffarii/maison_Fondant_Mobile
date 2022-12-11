import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { OldReparation } from "../../models/OldReparation";
// import { Reparation } from "../../models/Reparation";
// import { ReparationProduct } from "../../models/ReparationProduct";

export type AppNavigatorProps = {
	initialRouteName: keyof RootStackParamList;
};

export type MainStackParamList = {
	Landing: undefined;
	Device: undefined;
	Brand: { parentId: string; icons: JSX.Element[] };
	Gamme: { deviceId: string; brandId: string; icons: JSX.Element[] };
	Model: {
		deviceId: string;
		brandId: string;
		gammeId: string;
		icons: JSX.Element[];
	};
	Problem: {
		deviceId: string;
		brandId: string;
		gammeId: string;
		modelId: string;
		icons: JSX.Element[];
		modelColors: string[];
	};
	// Form: { reparationProduct: ReparationProduct };
	Success: { code: string };
	Fixes: undefined;
};

export type ProfileStackParamList = {
	Me: undefined;
	Setting: undefined;
};

export type FixDetailsTabsParamList = {
	// Info: { fix: OldReparation };
	Messages: undefined;
	//Address: { fix: OldReparation };
};

// export type AddressScreenProps = NativeStackScreenProps<
//   FixDetailsTabsParamList,
//   "Address"
// >;

// export type InfoScreenProps = NativeStackScreenProps<
//   FixDetailsTabsParamList,
//   "Info"
// >;

export type RootStackParamList = {
	Root: undefined;
	InitialConfig: undefined;
	Auth: undefined;
	Home: undefined;
	// Fixes: undefined;
	Profile: undefined;
	Landing: undefined;
	// Device: undefined;
	// Brand: { deviceId: string; icons: JSX.Element[] };
	// Gamme: { deviceId: string; brandId: string; icons: JSX.Element[] };
	// Model: {
	// 	deviceId: string;
	// 	brandId: string;
	// 	gammeId: string;
	// 	icons: JSX.Element[];
	// };

	Problem: {
		deviceId: string;
		brandId: string;
		gammeId: string;
		modelId: string;
		icons: JSX.Element[];
		modelColors: string[];
	};
	// Form: { reparationProduct: ReparationProduct };
};

export type RootScreenProps = NativeStackScreenProps<
	RootStackParamList,
	'Root'
>;

export type LandingScreenProps = NativeStackScreenProps<
	MainStackParamList,
	'Landing'
>;
export type DeviceScreenProps = NativeStackScreenProps<
	MainStackParamList,
	'Device'
>;

export type BrandScreenProps = NativeStackScreenProps<
	MainStackParamList,
	'Brand'
>;

export type GammeScreenProps = NativeStackScreenProps<
	MainStackParamList,
	'Gamme'
>;

export type ModelScreenProps = NativeStackScreenProps<
	MainStackParamList,
	'Model'
>;

export type ProblemScreenProps = NativeStackScreenProps<
	MainStackParamList,
	'Problem'
>;
// export type FormScreenProps = NativeStackScreenProps<
//   MainStackParamList,
//   "Form"
// >;

export type FormSuccessProps = NativeStackScreenProps<
	MainStackParamList,
	'Success'
>;

export type MainProps = BottomTabScreenProps<MainStackParamList>;

export type AuthTabParamList = {
	Login: undefined;
	Register: undefined;
	InitialConfig: undefined;
	Auth: undefined;
	Home: undefined;
	ForgetPassword: undefined;
};
export type CompanyProfileStackParamList = {
	Menu: undefined;
	CompanyId: undefined;
	Location: undefined;
	Specialities: undefined;
	Services: undefined;
	Me: undefined;
	HelpSupport: undefined;
	AboutApp: undefined;
	Auth: undefined;
};
export type HomeTabParamList = {
	Main: undefined;
	Fixes: undefined;
	Messages: undefined;
	Profile: {
		screen: keyof ProfileStackParamList;
		// params: { fix: OldReparation };
	};
	//RepairDetails: { fix: OldReparation };
};

export type ConfigStackParamList = {
	Welcome: undefined;
	Laguage: undefined;
	Country: undefined;
	Auth: undefined;
};
export type RepairsStackParamList = {
	List: undefined;
	//Details: { fix: Reparation };
};
export type RegisterStackParamList = {
	RegisterHome: undefined;
	RegisterEmail: undefined;
	Login: undefined;
	InitialConfig: { screen: string; params: any };
	Home: undefined;
};

export type RegisterWithEmailOrPhoneNumberStackParamList = {
	RegisterEmail: undefined;
	RegisterPhoneNumber: undefined;
};

export type FixesStackParamList = {
	List: undefined;
	Details: { fix: any };
	Info: { screen: FixDetailsTabsParamList; fix: any };
};
export type FixesScreenProps = BottomTabScreenProps<
	FixesStackParamList,
	'List'
>;

export type RegisterHomeScreenProps = NativeStackScreenProps<
	RegisterStackParamList,
	'RegisterHome'
>;

export type ProfileDetailScreenProps = NativeStackScreenProps<
	ProfileStackParamList,
	'Me'
>;
// export type RepairDetailsScreenProps = NativeStackScreenProps<
//   RepairsStackParamList,
//   "Details"
// >;
export type MenuScreenProps = NativeStackScreenProps<
	CompanyProfileStackParamList,
	'Menu'
>;
export type LocationScreenProps = NativeStackScreenProps<
	CompanyProfileStackParamList,
	'Location'
>;
export type FormHelpSupportProps = NativeStackScreenProps<
	CompanyProfileStackParamList,
	'HelpSupport'
>;
export type FormAboutAppProps = NativeStackScreenProps<
	CompanyProfileStackParamList,
	'AboutApp'
>;
export type FixDetailsScreenProps = BottomTabScreenProps<
	FixesStackParamList,
	'Details'
>;
export type LoginScreenProps = BottomTabScreenProps<AuthTabParamList, 'Login'>;

export type ProfileScreenProps = BottomTabScreenProps<
	ProfileStackParamList,
	'Me'
>;
export type MeProfileScreenProps = NativeStackScreenProps<
	CompanyProfileStackParamList,
	'Me'
>;
export type WelcomeScreenProps = NativeStackScreenProps<
	ConfigStackParamList,
	'Welcome'
>;

export type ChooseCountryScreenProps = NativeStackScreenProps<
	ConfigStackParamList,
	'Country'
>;
export type ChooseLanguageScreenProps = NativeStackScreenProps<
	ConfigStackParamList,
	'Laguage'
>;

export type LoginNavigationStack = {
	EmailOrPhone: undefined;
	Password: { email: string };
	Register: undefined;
	Home: undefined;
	ForgetPassword: undefined;
};

export type EmailOrPhoneScreenProps = NativeStackScreenProps<
	LoginNavigationStack,
	'EmailOrPhone'
>;
export type PasswordScreenProps = NativeStackScreenProps<
	LoginNavigationStack,
	'Password'
>;
export type RegisterScreenProps = NativeStackScreenProps<
	RegisterStackParamList,
	'RegisterEmail'
>;
export type ForgetPasswordScreenProps = NativeStackScreenProps<
	LoginNavigationStack,
	'ForgetPassword'
>;
export type deviceType =
	| 'smartphone'
	| 'laptop'
	| 'tablet'
	| 'printer'
	| 'tv'
	| 'gaming-device';
