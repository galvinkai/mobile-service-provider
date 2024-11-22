import { UsageProps } from "@/types/type";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const HomeBannerUsage = ({
    iconName,
    iconType,
    label,
    total,
    current,
    unit,
}: UsageProps) => {
    const [usage, setUsage] = useState(0);
    const iconSize = 30;
    const iconColor = "#E87400";

    const calculateUsage = (
        current: UsageProps["current"],
        total: UsageProps["total"],
    ) => {
        return (current / total) * 100;
    };

    useEffect(() => {
        setUsage(calculateUsage(current, total));
    }, [usage]);

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

    return (
        <View className="mx-2 flex-1 items-center gap-y-2 rounded-lg bg-white px-3 py-3 shadow-sm shadow-black">
            <AnimatedCircularProgress
                size={60}
                width={3}
                fill={usage}
                backgroundColor="#AEC0D5"
                tintColor="#E98320"
                tintTransparency={true}
                rotation={0}
                duration={800}
                delay={300}
            >
                {() => getIcon(iconType, iconName)}
            </AnimatedCircularProgress>
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

export default HomeBannerUsage;
