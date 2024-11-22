import SendData from "@/assets/icons/send-data.svg";
import { IconProps } from "@/types/type";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Pressable, Text, View } from "react-native";

const IconButton = ({ iconType, iconName, text, link }: IconProps) => {
    const iconSize = 30;
    const iconColor = "#E87400";

    const getIcon = (
        iconType: IconProps["iconType"],
        iconName: IconProps["iconName"],
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
            case "Material Community Icon":
                return (
                    <MaterialCommunityIcons
                        name={iconName}
                        size={iconSize}
                        color={iconColor}
                    />
                );
            case "Font Awesome 5":
                return (
                    <FontAwesome5
                        name={iconName}
                        size={iconSize}
                        color={iconColor}
                    />
                );

            case "Font Awesome 6":
                return (
                    <FontAwesome6
                        name={iconName}
                        size={iconSize}
                        color={iconColor}
                    />
                );

            case "Custom Icon Data":
                return <SendData width={iconSize} height={iconSize} />;
            default:
                return (
                    <MaterialIcons name="error" size={iconSize} color="red" />
                );
        }
    };

    return (
        <Pressable
            className="w-1/4 items-center gap-y-2"
            onPress={() => console.log("Pressed:", text)}
        >
            <View className="items-center rounded-lg border border-light-blue bg-white p-4 shadow-sm shadow-black/10">
                {getIcon(iconType, iconName)}
            </View>
            <Text className="text-center font-raleway-medium text-sm">
                {text}
            </Text>
        </Pressable>
    );
};

export default IconButton;
