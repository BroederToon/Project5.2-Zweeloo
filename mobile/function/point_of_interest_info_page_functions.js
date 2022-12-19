import { styles } from "../styles/basic_styles";
import { poiInfo } from "../styles/poi_page_styles";
import React, { useEffect, useState, useCallback } from "react";
import { Feather } from "@expo/vector-icons";
import { Pressable, Text, View, Image } from "react-native";

const loadScreen = () => {
    return (
        <View>
            <Text style={{ fontSize: 30 }}>isLoading...</Text>
        </View>
    );
};

export const showPoiInfo = (poiId) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        const response = await fetch(
            `http://10.232.7.233:3000/api/poi/${poiId}`
        );

        const json = await response.json();

        setData(json);
    }, []);

    useEffect(() => {
        fetchData()
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [fetchData]);

    if (isLoading) {
        return loadScreen();
    }

    if (data.message) {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>No data to show</Text>
            </View>
        );
    }

    const showPoiImage = () => {
        if (data.poi_img.length > 0) {
            let myImages = [];
            for (let i = 0; i < data.poi_img.length; i++) {
                myImages.push(
                    <Image
                        style={poiInfo.poiImage}
                        source={{
                            uri: `data:image/png;base64,${data.poi_img[i].src}`,
                        }}
                        key={i}
                    />
                );
            }

            return myImages;
        } else {
            return;
        }
    };

    return (
        <View style={poiInfo.layout}>
            <View style={styles.inlineIconText}>
                <Text style={poiInfo.poiTitle}>{data.name}</Text>
                <Feather
                    name="volume-2"
                    size={30}
                    color="black"
                    style={{
                        position: "absolute",
                        left: 225,
                    }}
                />
            </View>
            {showPoiImage()}
            <Text style={{ fontSize: 15, marginTop: 10 }}>
                {data.description}
            </Text>
        </View>
    );
};
