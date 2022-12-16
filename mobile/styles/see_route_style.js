import { StyleSheet } from "react-native";

export const see_route = StyleSheet.create({
    /** Pressable Start Route */
    startButton: {
        marginBottom: 20,
        position: "absolute",
        backgroundColor: "#004284",
        paddingBottom: 7,
        paddingTop: 7,
        width: 200,
        borderRadius: 10,
        bottom: 70,
    },
    textButton: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        alignSelf: "center",
    },
    /**Styling go back button */
    backButton: {
        position: "absolute",
        backgroundColor: "#e41d18",
        paddingBottom: 7,
        paddingTop: 7,
        width: 200,
        borderRadius: 10,
        bottom: 40,
    },
});
