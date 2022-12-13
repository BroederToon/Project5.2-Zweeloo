import { Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/basic_styles";
import MapView, { Geojson, Marker } from "react-native-maps";
import { map } from "../styles/map_page_styles";
import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import getMapPage from "./map_page_function";

const Map_page = () => {
    const nav = useNavigation();

    return <View style={styles.layout}>{getMapPage()}</View>;
};

export default Map_page;
