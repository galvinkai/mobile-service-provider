import Button from "@/components/Button";
import InputField from "@/components/InputField";
import LayoutAuth from "@/components/LayoutAuth";
import React from "react";
import { Text } from "react-native";

const Register = () => {
    return (
        <LayoutAuth>
            <Text className="w-full text-left font-raleway-semibold text-2xl">
                Create Account Password
            </Text>
            <InputField
                label="Password"
                placeholder="******"
                textContentType="password"
                secureTextEntry={true}
            />
            <InputField
                label="Confirm Password"
                placeholder="******"
                textContentType="password"
                secureTextEntry={true}
            />
            <Button
                text="Sign Up"
                colour="orange-custom"
                link="/(root)/(tabs)/home"
            />
        </LayoutAuth>
    );
};

export default Register;
