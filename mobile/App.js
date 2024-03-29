import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Route_type_page from "./screens/route_type_page";
import InformationPage from "./screens/information_page";
import Option_page from "./screens/option_page";
import Route_list from "./screens/route_list";
import PointOfInterestInfoPage from "./screens/poi_info_page";
import MapPage from "./screens/map_page";
import SeeRoutePage from "./screens/see_route_page";
import SponsorPage from "./screens/sponsors";
import AppInfoPage from "./screens/about_app";
import OrgInfoPage from "./screens/about_ogranisation";
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
            component={InformationPage}
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
            name="PointOfInterestInfoPage"
            component={PointOfInterestInfoPage}
            options={{ headerShown: false }}
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
        <Stack.Screen
            name="SponsorPage"
            component={SponsorPage}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="AppInfoPage"
            component={AppInfoPage}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="OrgInfoPage"
            component={OrgInfoPage}
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
