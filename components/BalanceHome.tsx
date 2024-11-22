import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const BalanceHome = () => {
    return (
        <View className="mt-2 flex flex-row items-center justify-between rounded-md bg-blue p-4 shadow-sm shadow-black/5">
            <View>
                <Text className="font-raleway-semibold text-2xl text-white">
                    Your Balance
                </Text>
                <Text className="font-rem-light text-lg text-white">
                    N$60.00
                </Text>
            </View>
            <View>
                <Pressable
                    onPress={() => {
                        router.navigate("/(root)/(tabs)/shop");
                    }}
                    className="flex-row items-center gap-x-4 rounded-xl bg-orange px-6 py-1.5"
                >
                    <FontAwesome6 name="money-bills" size={16} color="white" />

                    <Text className="font-raleway-bold text-lg text-white">
                        Top Up
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default BalanceHome;
