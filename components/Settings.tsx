import { SettingsOptionProps } from "@/types/type";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

const SettingsOption = ({ children, link }: SettingsOptionProps) => {
    return (
        <View className="border-light-blue-custom flex w-full flex-row items-center justify-between rounded-lg border-b pb-4">
            <Link href={link} className="font-raleway-medium">
                {children}
            </Link>
            <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="#E87400"
            />
        </View>
    );
};

export default SettingsOption;
