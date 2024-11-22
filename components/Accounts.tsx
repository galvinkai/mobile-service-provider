import { AccountsProps } from "@/types/type";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Accounts = ({ text, icon, iconSize = 30 }: AccountsProps) => {
    return (
        <Pressable className="flex-1 items-center gap-y-2 rounded-lg border border-light-blue bg-white py-2 shadow-sm shadow-black/5">
            <View className="flex h-8 w-full items-center justify-center">
                <MaterialCommunityIcons
                    name={icon}
                    size={iconSize}
                    color="#E87400"
                />
            </View>

            <Text className="font-raleway-medium text-xs">{text}</Text>
        </Pressable>
    );
};

export default Accounts;
