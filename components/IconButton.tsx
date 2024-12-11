import SendData from "@/assets/icons/send-data.svg";
import { IconProps } from "@/types/type";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const IconButton = ({
    iconType,
    iconName,
    text,
    link,
    iconSize = 30,
    padding,
    width,
    isDisabled,
}: IconProps) => {
    const iconColor = "#fff";

    const setWidth = () => {
        return width;
    };

    const getPadding = () => {
        if (padding) {
            return padding;
        } else {
            return "p-4";
        }
    };

    const setBackgroundColour = (colour = "bg-orange-custom") => {
        return colour;
    };

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
                    setBackgroundColour("bg-red-400"),
                    (
                        <MaterialIcons
                            name="error"
                            size={iconSize}
                            color="white"
                        />
                    )
                );
        }
    };

    return (
        <Pressable
            className={`items-center gap-y-2 ${setWidth()} `}
            onPress={() => router.navigate(link)}
            disabled={isDisabled}
        >
            <View
                className={`items-center rounded-full shadow-sm shadow-black/10 ${getPadding()} ${setBackgroundColour()}`}
            >
                {getIcon(iconType, iconName)}
            </View>

            {text && (
                <Text className="text-center font-raleway-medium text-sm">
                    {text}
                </Text>
            )}
        </Pressable>
    );
};

export default IconButton;
