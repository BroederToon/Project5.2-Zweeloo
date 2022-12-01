import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import RouteTypePage from "./screens/RouteTypePage";
import InformationPage from "./screens/InformationPage";
import OptionPage from "./screens/OptionPage";
import RouteList from "./screens/RouteList";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const BaseNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
        />
        <Tab.Screen
            name="Route"
            component={RouteTypePage}
            options={{ headerShown: false }}
        />
        <Tab.Screen
            name="Information"
            component={InformationPage}
            options={{ headerShown: false }}
        />
        <Tab.Screen
            name="Option"
            component={OptionPage}
            options={{ headerShown: false }}
        />
    </Tab.Navigator>
);

const AppNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="BaseNavigator"
            component={BaseNavigator}
            options={{ headerShown: false }}
        />
        <Stack.Screen name="RouteList" component={RouteList} />
    </Stack.Navigator>
);

const App = () => (
    <NavigationContainer>
        <AppNavigator />
    </NavigationContainer>
);

export default App;
