import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Balance = () => {
    return (
        <View className="mt-2 flex flex-row items-center justify-between rounded-md bg-blue p-4">
            <View>
                <Text className="font-raleway-semibold text-2xl text-white">
                    Your Balance
                </Text>
                <Text className="font-rem-light text-lg text-white">
                    N$60.00
                </Text>
            </View>
            <View>
                <Pressable className="flex-row items-center gap-x-3 rounded-xl bg-orange px-6 py-1.5">
                    <Entypo name="shopping-basket" size={18} color="white" />
                    <Text className="font-raleway-bold text-lg text-white">
                        Top Up
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Balance;
