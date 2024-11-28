import Button from "@/components/Button";
import InputField from "@/components/InputField";
import LayoutAuth from "@/components/LayoutAuth";
import React from "react";

const RegisterBroadbandNumber = () => {
    return (
        <LayoutAuth>
            <InputField
                label="Broadband Number"
                placeholder="e.g 08012345678"
                keyboardType="phone-pad"
            />
            <Button text="Next" colour="blue" link="/(auth)/register" />
        </LayoutAuth>
    );
};

export default RegisterBroadbandNumber;
