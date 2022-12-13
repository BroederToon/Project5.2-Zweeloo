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

const locationTracking = () => {
    const [position, setPosition] = useState(null);
    const [latitudePoint, setLatitudePoint] = useState(null);
    const [longitudePoint, setLongitudePoint] = useState(null);
    const [radius, setRadius] = useState(null);
    const [answer, setAnswer] = useState(null);

    useEffect(() => {
        startBackgroundUpdate();
        startForegroundUpdate();

        console.log(position);
        //point 1
        //lat 52.77903059795448
        //long 6.909968027276716

        //point 2:
        //lat 52.778920947348965
        //long 6.913238050135528

        // if (position != null) {
        //     setAnswer(
        //         distanceBetween2Points(
        //             position.latitude,
        //             52.778920947348965,
        //             position.longitude,
        //             6.913238050135528
        //         )
        //     );
        // }

        // if (answer < 158) {
        //     console.log("je bent binnen een straal van 158 meter van het punt");
        // } else {
        //     console.log("Je bent buiten de straal van 158 meter van het punt");
        // }
    }, [startBackgroundUpdate, startForegroundUpdate]);

    // Start location tracking in foreground
    const startForegroundUpdate = async () => {
        // Check if foreground permission is granted
        const { granted } = await Location.getForegroundPermissionsAsync();
        if (!granted) {
            console.log("location tracking denied");
            return;
        }

        // Make sure that foreground location tracking is not running
        foregroundSubscription?.remove();

        // Start watching position in real-time
        foregroundSubscription = await Location.watchPositionAsync(
            {
                // For better logs, we set the accuracy to the most sensitive option
                accuracy: Location.Accuracy.BestForNavigation,
            },
            (location) => {
                setPosition(location.coords);
            }
        );
    };

    // Start location tracking in background
    const startBackgroundUpdate = async () => {
        // Don't track position if permission is not granted
        const { granted } = await Location.getBackgroundPermissionsAsync();
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

        await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
            // For better logs, we set the accuracy to the most sensitive option
            accuracy: Location.Accuracy.BestForNavigation,
            // Make sure to enable this notification if you want to consistently track in the background
            showsBackgroundLocationIndicator: true,
            foregroundService: {
                notificationTitle: "Location",
                notificationBody: "Location tracking in background",
                notificationColor: "#fff",
            },
        });
    };
};

export default locationTracking;
