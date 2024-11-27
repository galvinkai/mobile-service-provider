import React from "react";
import { Text, View } from "react-native";

const BalanceShop = () => {
    return (
        <View className="mt-2 flex flex-row items-end justify-between rounded-md bg-blue p-4 shadow-sm shadow-black/5">
            <Text className="font-raleway-semibold text-3xl text-white">
                Your Balance
            </Text>
            <Text className="font-rem text-xl text-white">N$60.00</Text>
        </View>
    );
};

export default BalanceShop;
