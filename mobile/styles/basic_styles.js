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
        padding: 0,
        margin: 0,
        flex: 1.5,
    },
    /**Main header and titles */
    headerPage: {
        alignItems: "center",
        padding: 0,
        width: "100%",
    },
    title: {
        fontSize: 30,
        paddingTop: 20,
        fontWeight: "600",
        maxWidth: "80%",
    },
    inlineIconText: {
        paddingVertical: 0,
        paddingHorizontal: 0,
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
    },
    /**Bottom layout */
    bottomLayout: {
        flex: 4.5,
        marginBottom: 10,
    },
});
