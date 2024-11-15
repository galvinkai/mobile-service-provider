import HomeBanner from "@/components/HomeBanner";
import Layout from "@/components/Layout";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Home = () => {
    return (
        <Layout homeBanner={<HomeBanner />}>
            <View className="py-6">
                <View className="mt-2 flex flex-row justify-between rounded-md bg-blue p-4">
                    <View>
                        <Text className="font-raleway-semibold text-2xl text-white">
                            Your Balance
                        </Text>
                        <Text className="font-rem-light text-lg text-white">
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

            <View className="gap-y-6 rounded-md border border-light-blue p-4">
                <Text className="font-raleway-semibold text-2xl">
                    Quick Actions
                </Text>

                <View className="flex flex-row justify-between">
                    <View className="mx-2 flex-1 items-center gap-y-2">
                        <View className="items-center rounded-lg border border-light-blue p-4">
                            <MaterialCommunityIcons
                                name="cellphone-sound"
                                size={40}
                                color="#E87400"
                            />
                        </View>
                        <Text>Send Airtime</Text>
                    </View>
                    <View className="mx-2 flex-1 items-center gap-y-2">
                        <View className="items-center rounded-lg border border-light-blue p-4">
                            <MaterialIcons
                                name="insert-chart"
                                size={40}
                                color="#E87400"
                            />
                        </View>
                        <Text>Usage</Text>
                    </View>
                    <View className="mx-2 flex-1 items-center gap-y-2">
                        <View className="items-center rounded-lg border border-light-blue p-4">
                            <MaterialCommunityIcons
                                name="package-variant-closed"
                                size={40}
                                color="#E87400"
                            />
                        </View>
                        <Text>Jiva</Text>
                    </View>
                    <View className="mx-2 flex-1 items-center gap-y-2">
                        <View className="items-center rounded-lg border border-light-blue p-4">
                            <MaterialIcons
                                name="question-mark"
                                size={40}
                                color="#E87400"
                            />
                        </View>
                        <Text>Help</Text>
                    </View>
                </View>
            </View>
        </Layout>
    );
};

export default Home;
