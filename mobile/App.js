import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Route_type_page from "./screens/route_type_page";
import Information_page from "./screens/information_page";
import Option_page from "./screens/option_page";
import Route_list from "./screens/route_list";
import Point_of_interest_info_page from "./screens/Point_of_interest_info_page";
import MapPage from "./screens/map_page";
import SeeRoutePage from "./screens/see_route_page";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const BaseNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: "#FFF",
            tabBarInactiveTintColor: "#FFF",
            tabBarActiveBackgroundColor: "#00427D",
            tabBarInactiveBackgroundColor: "#00427D",
            tabBarShowLabel: false,
            tabBarStyle: { height: 60 },
        }}
    >
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons
                        name={focused ? "home" : "home-outline"}
                        size={30}
                        color={color}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Routes"
            component={Route_type_page}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons
                        name={focused ? "map" : "map-outline"}
                        size={30}
                        color={color}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Information"
            component={Information_page}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons
                        name={
                            focused
                                ? "information-circle"
                                : "information-circle-outline"
                        }
                        size={30}
                        color={color}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Settings"
            component={Option_page}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons
                        name={focused ? "settings" : "settings-outline"}
                        size={30}
                        color={color}
                    />
                ),
            }}
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
            options={{ headerShow: false }}
        />

        <Stack.Screen
            name="MapPage"
            component={MapPage}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="SeeRoute"
            component={SeeRoutePage}
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
