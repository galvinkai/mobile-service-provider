import Button from "@/components/Button";
import InputField from "@/components/InputField";
import LayoutAuth from "@/components/LayoutAuth";
import React from "react";
import { Pressable, Text, View } from "react-native";

const LoginOTP = () => {
    return (
        <LayoutAuth>
            <InputField label="OTP" placeholder="Enter OTP" />
            <Button text="Login" colour="blue" link="/(root)/(tabs)/home" />

            <View className="flex w-full flex-row items-center justify-center">
                <Text className="font-raleway-medium text-lg">
                    Didn't receive OTP?{" "}
                </Text>
                <Pressable>
                    <Text className="font-raleway-semibold text-lg text-orange">
                        Send Code
                    </Text>
                </Pressable>
            </View>
        </LayoutAuth>
    );
};

export default LoginOTP;
