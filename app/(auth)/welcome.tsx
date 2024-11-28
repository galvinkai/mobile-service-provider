import Logo from "@/assets/icons/account-active.svg";
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
            <View className="mb-8">
                <Logo width={200} height={200} />
            </View>

            <Button
                text="Log in with Mobile Number"
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
                text="Log in with Email"
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
                text="Log in with Google"
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
                text="Log in with Apple"
                textColour="black"
                border="gray-300"
                colour="white"
                icon={
                    <MaterialCommunityIcons
                        name="apple"
                        size={24}
                        color="black"
                    />
                }
            />
            <Link href="/registerOptions">
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
