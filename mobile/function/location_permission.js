import { useEffect } from "react";
import * as Location from "expo-location";

const getLocationPermission = () => {
    // Request permissions right after starting the app
    useEffect(() => {
        const requestPermissions = async () => {
            const foreground =
                await Location.requestForegroundPermissionsAsync();
            if (foreground.granted)
                await Location.requestBackgroundPermissionsAsync();
        };

        requestPermissions();
    }, []);
};

export default getLocationPermission;
