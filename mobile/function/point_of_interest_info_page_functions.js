import { styles } from "../styles/basic_styles";
import { poiInfo } from "../styles/poi_page_styles";
import React, { useEffect, useState, useCallback } from "react";
import { Feather } from "@expo/vector-icons";
import { Text, View, Image, ActivityIndicator } from "react-native";
import { IP } from "@env";

/**
 *
 * @param {*} poiId The poiId of the marker that is given along
 * @returns The info of the clicked poi and the images and audio source
 */
export const showPoiInfo = (poiId) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    //function fetchData which returns en sets the data of the called API
    const fetchData = useCallback(async () => {
        const response = await fetch(`${IP}/api/poi/${poiId}`);

        const json = await response.json();

        setData(json);
    }, []);

    //use the fetchData and check on the errors within and then call it
    useEffect(() => {
        fetchData()
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [fetchData]);

    //check whether it's stil loading
    if (isLoading) {
        return <ActivityIndicator size="large" color="#e2030f" />;
    }

    //check whether a message has been send.
    if (data.message) {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>No data to show</Text>
            </View>
        );
    }

    /**
     * loop through the poi images of the belonging poi
     * @returns the images or return nothing
     */
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

    //return all the information of the poi that has been clicked
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
