import { AccountExtraProps } from "@/types/type";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const AccountExtra = ({
    type,
    children,
    link,
    linkText,
    icon,
}: AccountExtraProps) => {
    return (
        <View className="gap-y-2 rounded-md border border-light-blue bg-white px-4 py-4 shadow-sm shadow-black/5">
            <View className="flex flex-row items-center gap-x-2">
                <MaterialIcons name={icon} size={22} color="#E87400" />
                <Text className="font-raleway-bold text-lg">{type}</Text>
            </View>

            <Text className="font-raleway-medium">{children}</Text>
            <Link className="font-raleway-semibold text-blue" href={link}>
                {linkText}
            </Link>
        </View>
    );
};

export default AccountExtra;
