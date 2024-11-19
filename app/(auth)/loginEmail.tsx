import Button from "@/components/Button";
import InputField from "@/components/InputField";
import LayoutAuth from "@/components/LayoutAuth";
import React from "react";

const LoginEmail = () => {
    return (
        <LayoutAuth>
            <InputField
                label="Email Address"
                placeholder="e.g galvin@gmail.com"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <InputField
                label="Password"
                placeholder="******"
                textContentType="password"
                secureTextEntry={true}
            />
            <Button text="Login" colour="blue" link="/(root)/(tabs)/home" />
        </LayoutAuth>
    );
};

export default LoginEmail;
