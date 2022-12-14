//imports
import { useEffect, useState } from "react";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";

const LOCATION_TASK_NAME = "LOCATION_TASK_NAME";
let foregroundSubscription = null;

//Task for location tracking
// Define the background task for location tracking
TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
    if (error) {
        console.error(error);
        return;
    }
    if (data) {
        // Extract location coordinates from data
        const { locations } = data;
        const location = locations[0];
        if (location) {
            // console.log("Location in background", location.coords);
        }
    }
});

const getLocationPermission = () => {
    // Define position state: {latitude: number, longitude: number}
    const [position, setPosition] = useState(null);
    const [latitudePoint, setLatitudePoint] = useState(null);
    const [longitudePoint, setLongitudePoint] = useState(null);
    const [radius, setRadius] = useState(null);
    const [answer, setAnswer] = useState(null);

    // Request permissions right after starting the app
    useEffect(() => {
        // console.log(Location.GeofencingRegionState);
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
