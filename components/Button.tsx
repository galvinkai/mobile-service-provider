import { ButtonProps } from "@/types/type";
import React from "react";
import { Pressable, Text } from "react-native";

const buttonColor = (colour: ButtonProps["colour"]) => {
    switch (colour) {
        case "orange":
            return "bg-orange";
        case "blue":
            return "bg-blue";
    }
};

const getTextSize = (size: ButtonProps["textSize"]) => {
    switch (size) {
        case "base":
            return "text-base";
        case "big":
            return "text-xl";
    }
};

const Button: React.FC<ButtonProps> = ({ text, icon, colour, textSize }) => {
    return (
        <Pressable
            className={`flex w-full flex-row items-center justify-center gap-3 rounded-full py-4 ${buttonColor(colour)}`}
        >
            {icon}

            <Text
                className={`font-raleway-semibold text-xl text-white ${getTextSize(textSize)}`}
            >
                {text}
            </Text>
        </Pressable>
    );
};

export default Button;
