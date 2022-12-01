import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import home from "./screens/home";
import route_type_page from "./screens/route_type_page";
import information_page from "./screens/information_page";
import option_page from "./screens/option_page";
import route_list from "./screens/route_list";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const BaseNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
            name="Home"
            component={home}
            options={{ headerShown: false }}
        />
        <Tab.Screen
            name="Route"
            component={route_type_page}
            options={{ headerShown: false }}
        />
        <Tab.Screen
            name="Information"
            component={information_page}
            options={{ headerShown: false }}
        />
        <Tab.Screen
            name="Option"
            component={option_page}
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
        <Stack.Screen name="RouteList" component={route_list} />
    </Stack.Navigator>
);

const App = () => (
    <NavigationContainer>
        <AppNavigator />
    </NavigationContainer>
);

export default App;
