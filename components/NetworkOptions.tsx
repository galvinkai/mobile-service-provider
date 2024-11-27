import { NetworkOptionsProps } from "@/types/type";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Text, View } from "react-native";

const NetworkOptions = ({ children }: NetworkOptionsProps) => {
    return (
        <View className="flex flex-row items-center justify-between rounded-lg border border-light-blue px-4 py-2">
            <Text className="font-raleway-medium">{children}</Text>
            <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="#E87400"
            />
        </View>
    );
};

export default NetworkOptions;
