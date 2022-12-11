// RootNavigation hook

import { createNavigationContainerRef } from "@react-navigation/native";
import { RootStackParamList } from "../utils/types";

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name: keyof RootStackParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function reset(name: keyof RootStackParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{ name: name, params: params }],
    });
  }
}
