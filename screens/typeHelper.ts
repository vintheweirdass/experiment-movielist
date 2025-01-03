import { NativeStackScreenProps } from "@react-navigation/native-stack";
export type RootStackParamList = {
    Home: undefined;
    Win: undefined;
  };
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;