import Logo from "@/assets/icons/account-active.svg";
import { AccountSummaryProps } from "@/types/type";
import React from "react";
import { Text, View } from "react-native";

const AccountSummary = ({
    device,
    plan,
    accountNumber,
    phoneModel,
    mobileNumber,
}: AccountSummaryProps) => {
    const getDeviceType = (deviceType: AccountSummaryProps["device"]) => {
        switch (deviceType) {
            case "phone":
                return "Mobile";
            case "tablet":
                return "Tablet";
            case "laptop":
                return "Laptop";
            case "desktop":
                return "Desktop";
            default:
                return "Unknown";
        }
    };

    return (
        <View className="flex flex-row items-center justify-between rounded-md border border-light-blue bg-white px-4 py-4 shadow-sm shadow-black/5">
            <View className="gap-y-1">
                <Text className="mb-2 font-raleway-bold text-xl">
                    {getDeviceType(device)} Plan
                </Text>

                <Text className="font-rem-light">{accountNumber}</Text>

                <Text className="font-rem-light">{phoneModel}</Text>
                <Text className="font-rem-light">{plan}</Text>
                <Text className="font-rem-light">{mobileNumber}</Text>
            </View>

            <Logo width={80} height={80} />
        </View>
    );
};

export default AccountSummary;
