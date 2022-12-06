import { styles } from "../styles/basic_styles";
import { card } from "../styles/route_card_styles";
import React, { useEffect, useState, useCallback } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, Pressable, Image, ScrollView } from "react-native";

const loadScreen = () => {
    return (
        <View>
            <Text style={{ fontSize: 30 }}>isLoading...</Text>
        </View>
    );
};

function getRouteInformation() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        const response = await fetch("http://10.232.0.114:3000/api/routes/all");

        const json = await response.json();

        if (!json.length >= 0) {
            setData(json);
        }
    }, []);

    useEffect(() => {
        fetchData()
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [fetchData]);

    if (isLoading) {
        return loadScreen();
    } else {
        if (data.message) {
            return (
                <View>
                    <Text style={{ fontSize: 30 }}>No data to show</Text>
                </View>
            );
        } else {
            const results = [];

            data.map((route) => {
                results.push(
                    <React.Fragment key={route.id}>
                        <View style={card.layout}>
                            <View style={styles.inlineIconText}>
                                <MaterialCommunityIcons
                                    name="walk"
                                    size={30}
                                    color="black"
                                />
                                <Text style={card.routeTitle}>
                                    {route.name}
                                </Text>
                            </View>
                            <View style={styles.inlineIconText}>
                                <Feather name="info" size={30} color="black" />
                                <Text style={card.routeSubTitle}>
                                    {route.extra}
                                </Text>
                            </View>
                            <View style={styles.inlineIconText}>
                                <Entypo
                                    name="direction"
                                    size={30}
                                    color="black"
                                />
                                <Text style={card.routeSubTitle}>
                                    {route.distance}
                                </Text>
                            </View>
                            <View style={card.bottomLayout}>
                                <Text style={card.routeText}>
                                    {route.description}
                                </Text>
                                <View style={styles.inlineIconText}>
                                    <Pressable
                                        style={card.cardButton}
                                        width="10%"
                                    >
                                        <Ionicons
                                            name="information"
                                            size={24}
                                            color="black"
                                        />
                                    </Pressable>
                                    <Pressable
                                        style={card.cardButton}
                                        width="80%"
                                    >
                                        <Text>ZIE ROUTE</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </React.Fragment>
                );
            });

            return results;
        }
    }
}

const Route_list = () => {
    return (
        <View style={styles.layout}>
            <View style={styles.innerLayout}>
                <View style={styles.upperLayout}>
                    <View style={styles.headerPage}>
                        <Image source={require("../assets/logohighres.png")} />
                        <Text style={styles.title}>Wandel Route</Text>
                        <Text>Kies een route:</Text>
                    </View>
                </View>
                <View style={styles.bottomLayout}>
                    <ScrollView
                        contentContainerStyle={{
                            padding: 0,
                            margin: 0,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {getRouteInformation()}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default Route_list;
