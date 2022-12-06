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
        margin: 20,
        padding: 0,
        width: "95%",
    },
    upperLayout: {
        flex: 2,
    },
    /**Main header and titles */
    headerPage: {
        alignItems: "center",
        margin: 10,
        padding: 0,
        width: "95%",
    },
    title: {
        fontSize: 30,
        paddingTop: 20,
        fontWeight: "600",
    },
    inlineIconText: {
        paddingVertical: 0,
        paddingHorizontal: 0,
        flexDirection: "row",
        alignItems: "center",
    },
    /**Bottom layout */
    bottomLayout: {
        flex: 4,
    },
});
