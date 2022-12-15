import { useEffect, useState } from "react";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

const LOCATION_TASK_NAME = "LOCATION_TASK_NAME";
let foregroundSubscription = null;

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
    }
});

const FollowLocation = () => {
    const [position, setPosition] = useState(null);
    const nav = useNavigation();

    useEffect(() => {
        startForegroundUpdate();
        startBackgroundUpdate();
    }, [startBackgroundUpdate, startForegroundUpdate]);

    // Start location tracking in foreground
    const startForegroundUpdate = async () => {
        // Check if foreground permission is granted
        const granted = await Location.getForegroundPermissionsAsync();
        if (!granted) {
            console.log("location tracking denied");
            return;
        }

        // Make sure that foreground location tracking is not running
        foregroundSubscription?.remove();

        try {
            // Start watching position in real-time
            foregroundSubscription = await Location.watchPositionAsync(
                {
                    // For better logs, we set the accuracy to the most sensitive option
                    accuracy: Location.Accuracy.BestForNavigation,
                },
                (location) => {
                    //set the position of the user with the location coordinates.
                    setPosition(location.coords);
                }
            );
        } catch {
            alert("Zet uw locatie aan en probeer opnieuw.");
            nav.goBack();
        }
    };

    // Start location tracking in background
    const startBackgroundUpdate = async () => {
        // Don't track position if permission is not granted
        const granted = await Location.getBackgroundPermissionsAsync();
        if (!granted) {
            console.log("location tracking denied");
            return;
        }

        // Make sure the task is defined otherwise do not start tracking
        const isTaskDefined = await TaskManager.isTaskDefined(
            LOCATION_TASK_NAME
        );
        if (!isTaskDefined) {
            console.log("Task is not defined");
            return;
        }

        // Don't track if it is already running in background
        const hasStarted = await Location.hasStartedLocationUpdatesAsync(
            LOCATION_TASK_NAME
        );
        if (hasStarted) {
            console.log("Already started");
            return;
        }

        try {
            await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
                // For better logs, we set the accuracy to the most sensitive option
                accuracy: Location.Accuracy.BestForNavigation,

                //Shows the indicator that background location tracking is active.
                showsBackgroundLocationIndicator: true,
                foregroundService: {
                    notificationTitle: "Location",
                    notificationBody: "Location tracking in background",
                    notificationColor: "#fff",
                },
            });
        } catch {
            alert("Zet uw locatie aan en probeer opnieuw.");
            nav.goBack();
        }
    };
};

export default FollowLocation;
