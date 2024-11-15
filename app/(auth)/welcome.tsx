import Button from "@/components/Button";
import LayoutAuth from "@/components/LayoutAuth";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import React from "react";
import { Platform, Text, View } from "react-native";

const Welcome = () => {
    return (
        <LayoutAuth>
            <Button
                text="Sign in with Mobile Number"
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
                link="/(auth)/loginMobile"
            />
            <Button
                text="Sign in with Email"
                colour="blue"
                icon={<MaterialIcons name="email" size={24} color="white" />}
                link="/(auth)/loginEmail"
            />

            <View className="flex w-full flex-row items-center justify-center gap-x-4 px-28">
                <View className="h-0.5 w-full bg-light-blue" />
                <Text className="text-center font-raleway-medium text-lg uppercase">
                    or
                </Text>
                <View className="h-0.5 w-full bg-light-blue" />
            </View>
            <Button
                text="Sign in with Google"
                textColour="black"
                border="gray-300"
                colour="white"
                icon={
                    <MaterialCommunityIcons
                        name="google"
                        size={24}
                        color="black"
                    />
                }
            />
            <Button
                text="Sign in with Apple"
                colour="blue"
                icon={
                    <MaterialCommunityIcons
                        name="apple"
                        size={24}
                        color="white"
                    />
                }
            />
            <Link href="/register">
                <View className="flex w-full flex-row items-center justify-center gap-x-2">
                    <Text className="font-raleway-medium text-lg">
                        Don't have an account ?
                    </Text>
                    <Text className="font-raleway-bold text-lg text-orange">
                        Sign up
                    </Text>
                </View>
            </Link>
        </LayoutAuth>
    );
};

export default Welcome;
