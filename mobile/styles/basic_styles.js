import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    /*Main layout*/
    layout: {
        flex: 6,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF5D2",
        margin: 0,
        padding: 0,
    },
    /*Main innerlayout*/
    innerLayout: {
        flex: 6,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFEFB9",
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 0,
        padding: 0,
        width: "90%",
    },
    upperLayout: {
        width: "100%",
        alignItems: "center",
        padding: 0,
        margin: 0,
        flex: 1.5,
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
        top: 12,
    },
    /**Bottom layout */
    bottomLayout: {
        width: "100%",
        flex: 4.5,
        marginBottom: 10,
    },
});
