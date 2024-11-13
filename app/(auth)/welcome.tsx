import Button from "@/components/Button";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import React from "react";
import { Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
    return (
        <SafeAreaView className="flex h-full w-full items-center justify-center bg-white px-4">
            <View className="w-full gap-y-8">
                <Button
                    text="Sign in with Mobile Number"
                    textSize="big"
                    colour="orange"
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
                <Button
                    text="Sign in with Email"
                    textSize="big"
                    colour="blue"
                    icon={
                        <MaterialIcons name="email" size={24} color="white" />
                    }
                />

                <View className="flex w-full flex-row items-center justify-center gap-x-4 px-28">
                    <View className="bg-light-blue h-0.5 w-full" />
                    <Text className="font-raleway-medium text-center text-lg uppercase">
                        or
                    </Text>
                    <View className="bg-light-blue h-0.5 w-full" />
                </View>
                <Button
                    text="Sign in with Google"
                    textSize="big"
                    colour="blue"
                    icon={
                        <MaterialCommunityIcons
                            name="google"
                            size={24}
                            color="white"
                        />
                    }
                />
                <Button
                    text="Sign in with Apple"
                    textSize="big"
                    colour="blue"
                    icon={
                        <MaterialCommunityIcons
                            name="apple"
                            size={24}
                            color="white"
                        />
                    }
                />
                <Link href="/home">
                    <View className="flex w-full flex-row items-center justify-center gap-x-2">
                        <Text className="font-raleway-medium text-lg">
                            Don't have an account ?
                        </Text>
                        <Text className="font-raleway-bold text-orange text-lg">
                            Sign up
                        </Text>
                    </View>
                </Link>
            </View>
        </SafeAreaView>
    );
};

export default Welcome;
