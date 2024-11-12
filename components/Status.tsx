import React from "react";
import { Text, View } from "react-native";
import { CircularProgress } from "react-native-circular-progress";

interface StatusProps {
    icon: any;
    total: number;
    current: number;
    label: string;
    unit: string;
}

const Status: React.FC<StatusProps> = ({
    icon,
    label,
    total,
    current,
    unit,
}) => {
    return (
        <View className="basis-1/3 items-center gap-y-1 rounded-md bg-white px-4 py-3 shadow shadow-black/20">
            <CircularProgress
                size={60}
                width={3}
                fill={70}
                backgroundColor="#AEC0D5"
                tintColor="#E98320"
                tintTransparency={true}
                rotation={0}
            >
                {icon}
            </CircularProgress>
            <Text className="font-raleway-semibold text-sm">{label}</Text>

            <View className="flex flex-row">
                <Text className="font-rem-semibold text-sm">{current}</Text>
                <Text className="font-rem text-sm">/{total}</Text>
                <Text className="font-raleway-black text-sm"> {unit}</Text>
            </View>
        </View>
    );
};

export default Status;
