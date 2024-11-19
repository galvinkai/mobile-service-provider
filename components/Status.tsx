import { StatusProps } from "@/types/type";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Text, View } from "react-native";
import { CircularProgress } from "react-native-circular-progress";

const iconSize = 30;
const iconColor = "#E87400";

const getIcon = (
    iconType: StatusProps["iconType"],
    iconName: StatusProps["iconName"],
) => {
    switch (iconType) {
        case "Material Icon":
            return (
                <MaterialIcons
                    name={iconName}
                    size={iconSize}
                    color={iconColor}
                />
            );
        case "FontAwesome5":
            return (
                <FontAwesome5
                    name={iconName}
                    size={iconSize}
                    color={iconColor}
                />
            );
        default:
            return <MaterialIcons name="error" size={iconSize} color="red" />;
    }
};

const Status = ({
    iconName,
    iconType,
    label,
    total,
    current,
    unit,
}: StatusProps) => {
    return (
        <View className="mx-2 flex-1 items-center gap-y-2 rounded-lg bg-white px-3 py-3 shadow shadow-black/40">
            <CircularProgress
                size={60}
                width={3}
                fill={70}
                backgroundColor="#AEC0D5"
                tintColor="#E98320"
                tintTransparency={true}
                rotation={0}
            >
                {() => getIcon(iconType, iconName)}
            </CircularProgress>
            <View className="w-full items-center gap-y-0.5">
                <Text className="font-raleway-semibold text-sm">{label}</Text>

                <View className="flex flex-row">
                    <Text className="font-rem-bold text-xs">{current}</Text>
                    <Text className="font-rem text-xs">/{total}</Text>
                    <Text className="font-raleway-bold text-xs"> {unit}</Text>
                </View>
            </View>
        </View>
    );
};

export default Status;
