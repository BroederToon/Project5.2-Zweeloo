import { View } from "react-native";
import { lineStyle } from "../styles/line_styles";

export default function Line() {
    return (
        <View style={lineStyle.line}>
            <View style={lineStyle.diamondLeft}></View>
            <View style={lineStyle.diamondRight}></View>
        </View>
    );
}
