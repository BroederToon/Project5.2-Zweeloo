import { card } from "../styles/route_card_styles";
import { styles } from "../styles/basic_styles";
import React, { useEffect, useState, useCallback } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

const loadScreen = () => {
    return (
        <View>
            <Text style={{ fontSize: 30 }}>isLoading...</Text>
        </View>
    );
};

/**
 * setting useState variables to call on later
 * fetching the data from the api and converting it to json
 * checking whether the response is more than 1
 * calling the useEffect so the fetchdata function is called once async
 * checking if the loading is ready, if not return loadscreen
 * else return the normal data, and if the data is empty of a message
 * if correct read out the data and show all data converted to json
 * @returns the retrieved content and the styling
 */

export const GetRouteInformation = () => {
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
};

export default { GetRouteInformation };
