import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Status from "./Status";

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
        <View className="gap-y-10 border-t-0 bg-blue px-4 py-6">
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

            <View className="flex flex-row items-center justify-between">
                <Status
                    icon={() => (
                        <MaterialIcons
                            name="local-phone"
                            size={30}
                            color="#E87400"
                        />
                    )}
                    label="Minutes"
                    total={500}
                    current={350}
                    unit="Mins"
                />
                <Status
                    icon={() => (
                        <MaterialIcons
                            name="local-phone"
                            size={30}
                            color="#E87400"
                        />
                    )}
                    label="Data"
                    total={500}
                    current={350}
                    unit="GB"
                />
                <Status
                    icon={() => (
                        <MaterialIcons
                            name="local-phone"
                            size={30}
                            color="#E87400"
                        />
                    )}
                    label="Minutes"
                    total={500}
                    current={350}
                    unit="Mins"
                />
            </View>
        </View>
    );
};

export default HomeBanner;
