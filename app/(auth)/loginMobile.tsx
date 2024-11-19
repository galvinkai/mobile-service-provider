import Button from "@/components/Button";
import InputField from "@/components/InputField";
import LayoutAuth from "@/components/LayoutAuth";
import React from "react";

const LoginMobile = () => {
    return (
        <LayoutAuth>
            <InputField
                label="Mobile Number"
                placeholder="e.g 085123456"
                textContentType="telephoneNumber"
                keyboardType="phone-pad"
            />
            <Button text="Next" colour="blue" link="/(auth)/loginOTP" />
        </LayoutAuth>
    );
};

export default LoginMobile;
