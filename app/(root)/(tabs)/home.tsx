import BalanceHome from "@/components/BalanceHome";
import HomeBanner from "@/components/HomeBanner";
import IconButton from "@/components/IconButton";
import Layout from "@/components/Layout";
import RecentPurchase from "@/components/RecentPurchase";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Home = () => {
    return (
        <Layout homeBanner={<HomeBanner />}>
            <BalanceHome />

            <View className="gap-y-8 rounded-md border border-light-blue bg-white p-4 shadow-sm shadow-black/5">
                <Text className="font-raleway-semibold text-2xl">
                    Quick Menu
                </Text>

                <View className="flex flex-row justify-between">
                    <IconButton
                        iconType="Material Icon"
                        iconName="send-to-mobile"
                        text="Send Airtime"
                        link=""
                    />

                    <IconButton
                        iconType="Material Icon"
                        iconName="bar-chart"
                        text="Usage"
                        link=""
                    />

                    <IconButton
                        iconType="Material Community Icon"
                        iconName="package-variant-closed"
                        text="Jiva"
                        link=""
                    />

                    <IconButton
                        iconType="Material Icon"
                        iconName="question-mark"
                        text="Help"
                        link=""
                    />
                </View>
            </View>

            <View className="gap-y-8 rounded-md border border-light-blue bg-white px-4 py-5 shadow-sm shadow-black/5">
                <View className="flex flex-row items-center justify-between pr-4">
                    <Text className="font-raleway-semibold text-2xl">
                        Recent Purchases
                    </Text>
                    <Pressable>
                        <Text className="font-raleway-semibold text-blue">
                            View All
                        </Text>
                    </Pressable>
                </View>
                <View className="flex flex-row">
                    <RecentPurchase
                        text="airtime"
                        price={75}
                        date="13 Dec 2024"
                    />

                    <RecentPurchase text="data" price={58} date="13 Dec 2024" />
                </View>
            </View>
        </Layout>
    );
};

export default Home;
