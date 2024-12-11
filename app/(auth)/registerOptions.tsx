import Button from "@/components/Button";
import LayoutAuth from "@/components/LayoutAuth";
import React from "react";
import { Text } from "react-native";

const RegisterOptions = () => {
    return (
        <LayoutAuth>
            <Text className="font-raleway-semibold text-2xl">
                Let's set up your account
            </Text>
            <Button
                text="I'm a Mobile Customer"
                colour="orange-custom"
                link="/registerMobileNumber"
            />
            <Button
                text="I'm a Broadband Customer"
                colour="blue-custom"
                link="/registerBroadbandNumber"
            />
        </LayoutAuth>
    );
};

export default RegisterOptions;
