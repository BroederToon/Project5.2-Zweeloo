import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Route_type_page from "./screens/route_type_page";
import Information_page from "./screens/information_page";
import Option_page from "./screens/option_page";
import Route_list from "./screens/route_list";
import Point_of_interest_info_page from "./screens/Point_of_interest_info_page";

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
            component={Route_type_page}
            options={{ headerShown: false }}
        />
        <Tab.Screen
            name="Information"
            component={Information_page}
            options={{ headerShown: false }}
        />
        <Tab.Screen
            name="Option"
            component={Option_page}
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
        <Stack.Screen
            name="RouteList"
            component={Route_list}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Point_of_interest_info_page"
            component={Point_of_interest_info_page}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);

const App = () => (
    <NavigationContainer>
        <AppNavigator />
    </NavigationContainer>
);

export default App;
