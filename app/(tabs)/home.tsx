import HomeBanner from "@/components/HomeBanner";
import Layout from "@/components/Layout";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Home = () => {
    return (
        <Layout homeBanner={<HomeBanner />}>
            <View className="py-6">
                <View className="flex flex-row justify-between rounded-md bg-blue p-4">
                    <View>
                        <Text className="font-raleway-bold text-3xl text-white">
                            Your Balance
                        </Text>
                        <Text className="font-rem text-xl text-white">
                            N$60.00
                        </Text>
                    </View>
                    <View>
                        <Pressable className="rounded-lg bg-orange px-4 py-1">
                            <Text className="font-raleway-semibold text-lg text-white">
                                Top Up
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <View className="rounded-md border border-light-blue p-4">
                <Text className="text-3xl">Quick Actions</Text>

                <View className="flex flex-row">
                    <View className="rounded-md border border-light-blue p-4">
                        <Text>Send Airtime</Text>
                    </View>
                </View>
            </View>
        </Layout>
    );
};

export default Home;
