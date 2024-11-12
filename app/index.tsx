import Logo from "@/assets/icons/account-active.svg";
import Button from "@/components/Button";
import Layout from "@/components/Layout";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import React from "react";
import { Platform, Text, View } from "react-native";

const index = () => {
    return (
        <Layout bgColor="rgba(233,131,32,0.10)">
            <View className="h-full w-full items-center justify-center gap-y-20">
                <Logo width={150} height={150} />

                <View className="w-full gap-y-6">
                    <View>
                        <Button
                            text="Sign in with Mobile Number"
                            color="orange"
                            icon={
                                <View>
                                    {Platform.OS === "ios" ? (
                                        <MaterialIcons
                                            name="phone-iphone"
                                            size={24}
                                            color="white"
                                        />
                                    ) : (
                                        <MaterialIcons
                                            name="phone-android"
                                            size={24}
                                            color="white"
                                        />
                                    )}
                                </View>
                            }
                        />
                    </View>

                    <View>
                        <Button
                            text="Sign in with Email"
                            color="blue"
                            icon={
                                <MaterialIcons
                                    name="email"
                                    size={24}
                                    color="white"
                                />
                            }
                        />
                    </View>

                    <View className="flex w-full flex-row items-center justify-center gap-x-4 px-28">
                        <View className="h-0.5 w-full bg-light-blue" />
                        <Text className="text-center font-raleway-medium text-lg uppercase">
                            or
                        </Text>
                        <View className="h-0.5 w-full bg-light-blue" />
                    </View>
                    <View>
                        <Button
                            text="Sign in with Google"
                            color="blue"
                            icon={
                                <MaterialCommunityIcons
                                    name="google"
                                    size={24}
                                    color="white"
                                />
                            }
                        />
                    </View>
                    <View>
                        <Button
                            text="Sign in with Apple"
                            color="blue"
                            icon={
                                <MaterialCommunityIcons
                                    name="apple"
                                    size={24}
                                    color="white"
                                />
                            }
                        />
                    </View>

                    <Link href="/home">
                        <View className="flex w-full flex-row items-center justify-center gap-x-2">
                            <Text className="font-raleway-medium text-lg">
                                Don't have an account ?
                            </Text>
                            <Text className="font-raleway-bold text-lg text-orange">
                                Sign up
                            </Text>
                        </View>
                    </Link>
                </View>
            </View>
        </Layout>
    );
};

export default index;
