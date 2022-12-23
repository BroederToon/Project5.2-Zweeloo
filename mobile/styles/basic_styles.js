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
        flex: 1.4,
        paddingTop: 20,
    },
    body: {
        width: "90%",
        flex: 4.6,
        marginBottom: 20,
        alignItems: "center",
    },
    /**Main header and titles */
    headerTitle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginVertical: 10,
        width: "100%",
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        width: "80%",
        height: 35,
        textAlign: "center",
    },
    backBtn: {
        position: "absolute",
        left: 7,
    },
});
