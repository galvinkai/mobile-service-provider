import { ButtonProps } from "@/types/type";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";

const buttonColor = (colour: ButtonProps["colour"]) => {
    switch (colour) {
        case "orange":
            return "bg-orange";
        case "blue":
            return "bg-blue";
        default:
            return "bg-white";
    }
};

const buttonBorder = (border: ButtonProps["border"]) => {
    if (border) {
        return `border border-${border}`;
    }
};

const buttonTextColour = (textColour: ButtonProps["textColour"]) => {
    if (textColour) {
        return `text-${textColour}`;
    } else {
        return "text-white";
    }
};

const buttonAction = (
    link: ButtonProps["link"],
    resetRoute: ButtonProps["resetRoute"],
    onPress: ButtonProps["onPress"],
) => {
    if (link) {
        if (resetRoute === true) {
            return router.replace(link);
        }
        return router.navigate(link);
    } else {
        return onPress;
    }
};

const Button: React.FC<ButtonProps> = ({
    text,
    icon,
    colour,
    textColour,
    border,
    link,
    resetRoute,
    onPress,
}) => {
    return (
        <Pressable
            className={`flex w-full flex-row items-center justify-center gap-3 rounded-full py-4 ${buttonColor(colour)} ${buttonBorder(border)}`}
            onPress={() => {
                buttonAction(link, resetRoute, onPress);
            }}
        >
            {icon}

            <Text
                className={`font-raleway-medium text-lg ${buttonTextColour(textColour)}`}
            >
                {text}
            </Text>
        </Pressable>
    );
};

export default Button;
