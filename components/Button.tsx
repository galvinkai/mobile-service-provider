import React from "react";
import { Pressable, Text } from "react-native";

interface ButtonProps {
    text: string;
    icon?: any;
    color: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon, color }) => {
    return (
        <Pressable
            className={`bg-${color} flex w-full flex-row items-center justify-center gap-8 rounded-full py-4`}
        >
            {icon}

            <Text className="font-raleway-semibold text-xl text-white">
                {text}
            </Text>
        </Pressable>
    );
};

export default Button;
