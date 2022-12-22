import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    /*Main layout*/
    layout: {
        flex: 6,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFEFB9",
        margin: 0,
        padding: 0,
    },
    /*Border*/
    border: {
        // flex: 6,
        position: "absolute",
        width: "100%",
        height: "100%",
        borderWidth: 20,
        borderColor: "#FFF5D2",
    },
    header: {
        width: "90%",
        alignItems: "center",
        padding: 0,
        margin: 0,
        flex: 1.5,
        paddingTop: 20,
    },
    body: {
        width: "90%",
        flex: 4.5,
        marginBottom: 20,
    },
    /**Main header and titles */
    headerTitle: {
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        marginVertical: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: "600",
    },
    backBtn: {
        position: "absolute",
        left: -40,
        top: 9,
    },
    
});
