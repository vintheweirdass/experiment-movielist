import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen.tsx";
import { RootStackParamList } from "./screens/typeHelper";
const Stack = createNativeStackNavigator<RootStackParamList>()
const MainNavigator:React.FC=()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default MainNavigator