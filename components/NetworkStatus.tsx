import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const NetworkStatus = () => {
    const getCurrentDateTime = () => {
        const now = new Date();
        return now.toLocaleString();
    };
    return (
        <View>
            <View className="border-light-blue-custom flex flex-row items-center justify-between overflow-hidden rounded-lg border-y border-r pr-4">
                <View className="flex flex-row items-center gap-x-4">
                    <View className="bg-green-custom rounded-l-lg p-5">
                        <MaterialIcons
                            name="network-wifi"
                            size={64}
                            color="white"
                        />
                    </View>
                    <View className="gap-y-4">
                        <View className="gap-y-1">
                            <Text className="font-raleway-medium text-xl">
                                Good Network
                            </Text>
                            <Link
                                href="/(root)/(tabs)/network"
                                className="text-blue-custom font-raleway-medium text-sm"
                            >
                                Still having trouble?
                            </Link>
                        </View>
                        <Text className="font-raleway text-xs text-gray-600">
                            Updated on{" "}
                            <Text className="font-rem-light text-gray-500">
                                {getCurrentDateTime()}
                            </Text>
                        </Text>
                    </View>
                </View>

                <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color="#E87400"
                />
            </View>
        </View>
    );
};

export default NetworkStatus;
