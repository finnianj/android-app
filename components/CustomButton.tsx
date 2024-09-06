import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    textStyles?: string;
    containerStyles?: string;
}

export default function CustomButton({ onPress, title, textStyles = '', containerStyles = '' }: CustomButtonProps) {
    return (
        <TouchableOpacity 
            activeOpacity={0.7}
            onPress={onPress}
            className={`rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
        >
            <Text className={`text-lg text-white font-semibold ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}

