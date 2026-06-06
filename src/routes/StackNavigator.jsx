import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import MainPageScreen from "../screens/main_pageScreen";
import PassagensScreen from "../screens/PassagensScreen";
import DetalhesScreen from "../screens/DetalhesScreen";
import AuthScreen from "../screens/AuthScreen";
import PerfilScreen from "../screens/PerfilScreen";
import Routes from ".";

const NativeStack = createNativeStackNavigator(); 

export default function StackNavigator() {
  return (
    <NativeStack.Navigator
      initialRouteName={Routes.HOME}
    //   screenOptions={{ headerShown: false }}
    >
      <NativeStack.Screen
        name={Routes.HOME}
        component={MainPageScreen}        
      />
      <NativeStack.Screen name={Routes.PASSAGENS} component={PassagensScreen} />
      <NativeStack.Screen
        name={Routes.DETALHES}
        component={DetalhesScreen}        
      />
      <NativeStack.Screen name={Routes.AUTH} component={AuthScreen} />
      <NativeStack.Screen name={Routes.PERFIL} component={PerfilScreen} />
    </NativeStack.Navigator>
  );
}