import Layout from "@/components/Layout";
import NetworkOptions from "@/components/NetworkOptions";
import NetworkStatus from "@/components/NetworkStatus";
import UsageChart from "@/components/UsageChart";
import React from "react";
import { View } from "react-native";

const Network = () => {
    const mobileData = [
        { value: 0 },
        { value: 20 },
        { value: 18 },
        { value: 40 },
        { value: 36 },
        { value: 60 },
        { value: 54 },
    ];

    const broadbandData = [
        { value: 0 },
        { value: 50 },
        { value: 18 },
        { value: 40 },
        { value: 70 },
        { value: 60 },
        { value: 10 },
    ];
    return (
        <Layout>
            <NetworkStatus />
            <View className="my-4 gap-y-4">
                <NetworkOptions>Broadband Settings</NetworkOptions>
                <NetworkOptions>Speed Test</NetworkOptions>
                <NetworkOptions>Check Area Coverage</NetworkOptions>
            </View>
            <View className="gap-y-16">
                <UsageChart
                    data={mobileData}
                    title="Mobile Data Usage"
                    link="/(root)/(tabs)/network"
                    colour="#E87400"
                />
                <UsageChart
                    data={broadbandData}
                    title="Broadband Data Usage"
                    link="/(root)/(tabs)/network"
                    colour="#295791"
                />
            </View>
        </Layout>
    );
};

export default Network;
