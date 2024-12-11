import Layout from "@/components/Layout";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Pressable, Text, View } from "react-native";

const profile = () => {
    return (
        <Layout>
            <View className="gap-y-6">
                <View className="gap-y-2">
                    <View className="border-light-blue-custom flex flex-row items-end justify-between border-b pb-2">
                        <Text className="font-raleway-semibold text-2xl">
                            Personal Information
                        </Text>
                        <Pressable>
                            <Text className="text-blue-custom font-raleway-semibold">
                                Edit
                            </Text>
                        </Pressable>
                    </View>
                    <View>
                        <View className="px-4 py-3">
                            <View className="">
                                <View className="gap-y-2">
                                    <Text className="font-raleway-medium text-lg">
                                        First Name
                                    </Text>
                                    <Text className="font-raleway-medium text-gray-500">
                                        Panduleni
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View className="px-4 py-3">
                            <View className="">
                                <View className="gap-y-2">
                                    <Text className="font-raleway-medium">
                                        Last Name
                                    </Text>
                                    <Text className="text-gray-500">
                                        Kaiyamo
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View className="px-4 py-3">
                            <View className="flex flex-row items-end justify-between">
                                <View className="gap-y-2">
                                    <Text className="font-raleway-medium">
                                        Email Address
                                    </Text>
                                    <Text className="text-gray-500">
                                        pandu@mail.com
                                    </Text>
                                </View>

                                <View className="flex flex-row items-center gap-x-1">
                                    <MaterialIcons
                                        name="verified-user"
                                        size={18}
                                        color="#16a34a"
                                    />
                                    <Text className="text-green-600 font-raleway-medium">
                                        Verified
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="gap-y-2">
                    <Text className="border-light-blue-custom border-b font-raleway-semibold text-lg">
                        Account Settings
                    </Text>
                </View>
            </View>
        </Layout>
    );
};

export default profile;
