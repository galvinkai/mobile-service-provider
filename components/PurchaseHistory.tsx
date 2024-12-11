import { RecentPurchaseProps } from "@/types/type";
import React from "react";
import { Text, View } from "react-native";
import PurchaseAirtime from "../assets/icons/purchase-airtime.svg";
import PurchaseData from "../assets/icons/purchase-data.svg";
import PurchasePackage from "../assets/icons/purchase-package.svg";

const PurchaseHistory = ({ text, date, price, type }: RecentPurchaseProps) => {
    const iconSize = 80;

    const getIcon = (type: RecentPurchaseProps["type"]) => {
        switch (type) {
            case "data":
                return <PurchaseAirtime height={iconSize} width={iconSize} />;
            case "airtime":
                return <PurchaseData height={iconSize} width={iconSize} />;
            case "package":
                return <PurchasePackage height={iconSize} width={iconSize} />;
            case "minutes":
                return <PurchasePackage height={iconSize} width={iconSize} />;
        }
    };
    return (
        <View className="border-light-blue-custom w-full flex-1 flex-row items-center rounded-md border p-4">
            {getIcon(type)}
            <View>
                <Text className="font-raleway-semibold text-lg capitalize">
                    {text}
                </Text>
                <Text className="font-rem-light text-sm">
                    N${price.toFixed(2)}
                </Text>
                <Text className="font-rem-light text-xs text-gray-500">
                    {date}
                </Text>
            </View>
        </View>
    );
};

export default PurchaseHistory;
