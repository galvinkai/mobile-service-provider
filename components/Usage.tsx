import React from "react";
import { View } from "react-native";
import AccountUsage from "./AccountUsage";

const Usage = () => {
    return (
        <View className="border-light-blue-custom gap-y-8 rounded-md border bg-white px-4 py-4 shadow-sm shadow-black/5">
            <AccountUsage
                iconType="FontAwesome5"
                iconName="globe"
                label="Data"
                current={2}
                total={5}
                unit="GB"
            />
            <AccountUsage
                iconType="Material Icon"
                iconName="local-phone"
                label="Minutes"
                current={350}
                total={500}
                unit="Mins"
            />
            <AccountUsage
                iconType="Material Icon"
                iconName="message"
                label="Messages"
                current={800}
                total={1155}
                unit="Mins"
            />
        </View>
    );
};

export default Usage;
