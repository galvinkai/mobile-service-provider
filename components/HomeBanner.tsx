import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import HomeBannerUsage from "./HomeBannerUsage";

const HomeBanner = () => {
    const getTimeOfDay = () => {
        const now = new Date();
        const hours = now.getHours();
        if (hours < 12) {
            return "Good Morning";
        } else if (hours < 18) {
            return "Good Afternoon";
        } else {
            return "Good Evening";
        }
    };

    const greeting = getTimeOfDay();
    return (
        <View className="gap-y-8 border-t-0 bg-blue px-4 pb-8 pt-4">
            <View className="flex flex-row items-start justify-between">
                <View className="flex flex-row items-center gap-x-1">
                    <Ionicons name="person-circle" size={60} color="white" />
                    <View>
                        <Text className="font-rem-lightitalic text-white">
                            085681057
                        </Text>
                        <Text className="font-raleway- text-lg text-white">
                            {greeting}, Galvin
                        </Text>
                    </View>
                </View>
                <View>
                    <Pressable>
                        {/* <Badge
                        size={6}
                        style={{ backgroundColor: "#E87400" }}
                    /> */}
                        <MaterialCommunityIcons
                            name="bell"
                            size={24}
                            color="white"
                        />
                    </Pressable>
                </View>
            </View>

            <View className="gap-y-2">
                <Text className="font-raleway-semibold text-xl text-white">
                    Current Plan
                </Text>
                <Text className="font-raleway-bolditalic text-4xl text-white">
                    Pay As You Go
                </Text>
            </View>

            <View className="flex w-full flex-row items-center">
                <HomeBannerUsage
                    iconType="FontAwesome5"
                    iconName="globe"
                    label="Data"
                    current={2}
                    total={5}
                    unit="GB"
                />
                <HomeBannerUsage
                    iconType="Material Icon"
                    iconName="local-phone"
                    label="Minutes"
                    current={350}
                    total={500}
                    unit="Mins"
                />

                <HomeBannerUsage
                    iconType="Material Icon"
                    iconName="message"
                    label="Messages"
                    current={800}
                    total={1155}
                    unit="Mins"
                />
            </View>
        </View>
    );
};

export default HomeBanner;
