import { UsageProps } from "@/types/type";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Progress from "react-native-progress";

const AccountUsage = ({
    iconName,
    iconType,
    label,
    total,
    current,
    unit,
}: UsageProps) => {
    const [usage, setUsage] = useState(0);

    const iconSize = 18;
    const iconColor = "#E87400";

    const getIcon = (
        iconType: UsageProps["iconType"],
        iconName: UsageProps["iconName"],
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
                return (
                    <MaterialIcons name="error" size={iconSize} color="red" />
                );
        }
    };

    const calculateUsage = (
        current: UsageProps["current"],
        total: UsageProps["total"],
    ) => {
        return current / total;
    };

    useEffect(() => {
        setUsage(calculateUsage(current, total));
    }, [usage]);

    return (
        <View className="gap-2">
            <View className="flex w-full flex-row items-center justify-between">
                <View className="w-flex flex-row items-center gap-x-2">
                    {getIcon(iconType, iconName)}
                    <Text className="font-raleway-semibold text-lg">
                        {label}
                    </Text>
                </View>

                <Text className="font-rem text-sm">
                    <Text className="font-rem-bold">{current}</Text>/{total}{" "}
                    {unit}
                </Text>
            </View>
            <Progress.Bar
                progress={usage}
                width={null}
                color="#295791"
                borderRadius={4}
                borderWidth={0}
                useNativeDriver={true}
                height={5}
                unfilledColor="#AEC0D5"
                animationType="timing"
                animationConfig={{ bounciness: 5 }}
            />
        </View>
    );
};

export default AccountUsage;
