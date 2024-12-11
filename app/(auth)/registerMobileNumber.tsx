import Button from "@/components/Button";
import InputField from "@/components/InputField";
import LayoutAuth from "@/components/LayoutAuth";
import React from "react";

const RegisterMobileNumber = () => {
    return (
        <LayoutAuth>
            <InputField
                label="Mobile Number"
                placeholder="e.g 0856581057"
                keyboardType="phone-pad"
            />
            <Button
                text="Next"
                colour="orange-custom"
                link="/(auth)/register"
            />
        </LayoutAuth>
    );
};

export default RegisterMobileNumber;
