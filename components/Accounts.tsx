import { AccountsProps } from "@/types/type";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Accounts = ({ text, icon }: AccountsProps) => {
    return (
        <Link href="/(root)/(tabs)/account" className="w-1/4">
            <View className="w-full items-center gap-y-1 rounded-lg border-2 border-light-blue px-2 py-2">
                <MaterialCommunityIcons name={icon} size={30} color="#E87400" />
                <Text className="font-raleway-medium text-xs">{text}</Text>
            </View>
        </Link>
    );
};

export default Accounts;
