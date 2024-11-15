import { InputFieldProps } from "@/types/type";
import React from "react";
import { KeyboardAvoidingView, Platform, Text, TextInput } from "react-native";

const InputField = ({ label, placeholder, ...props }: InputFieldProps) => {
    return (
        <KeyboardAvoidingView
            className="w-full gap-2"
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Text className="text-sm text-gray-500">{label}</Text>
            <TextInput
                className="w-full rounded-md border border-light-blue px-4 py-3"
                placeholder={placeholder}
                placeholderTextColor={"#B0B0B0"}
                {...props}
            />
        </KeyboardAvoidingView>
    );
};

export default InputField;
