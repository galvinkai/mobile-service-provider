import { StatusProps } from "@/types/type";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Text, View } from "react-native";
import { CircularProgress } from "react-native-circular-progress";

const Status = ({ icon, label, total, current, unit }: StatusProps) => {
    return (
        <View className="mx-2 flex-1 items-center gap-y-2 rounded-md bg-white px-3 py-3 shadow shadow-black/20">
            <CircularProgress
                size={55}
                width={3}
                fill={70}
                backgroundColor="#AEC0D5"
                tintColor="#E98320"
                tintTransparency={true}
                rotation={0}
            >
                {() => <MaterialIcons name={icon} size={35} color="#E87400" />}
            </CircularProgress>

            <Text className="font-raleway-semibold text-sm">{label}</Text>

            <View className="flex flex-row">
                <Text className="font-rem-bold text-sm">{current}</Text>
                <Text className="font-rem text-sm">/{total}</Text>
                <Text className="font-raleway-bold text-sm"> {unit}</Text>
            </View>
        </View>
    );
};

export default Status;
