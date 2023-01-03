import { StyleSheet } from "react-native";

export const infoStyles = StyleSheet.create({
    // Main layout
    btn: {
        width: "80%",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
        borderWidth: 4,
        marginBottom: 10,
        borderColor: "#333333",
        padding: 5,
    },
    btnTxt: {
        marginLeft: 8,
        fontSize: 18,
        fontWeight: "700",
        textTransform: "uppercase",
        color: "#333333",
    }
});
