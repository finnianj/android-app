import AppGradient from '@/components/AppGradient';
import React, { useContext } from 'react';
import { View, Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import { TimerContext } from '@/context/TimerContext';

const AdjustMeditationDuration = () => {
    const { setDuration } = useContext(TimerContext)
    
    const handlePress = (duration: number) => {
        setDuration(duration);
        router.back();
    }

    return (
        <View className='flex-1 relative'>
            <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
                <Text>test</Text>
                <Pressable onPress={() => router.back()} className='absolute top-16 left-6 z-10'>
                    <AntDesign name='leftcircleo' size={50} color='white' />
                </Pressable>
                <View className='h-4/5 justify-center'>
                    <Text className='text-white mb-8 text-3xl font-bold text-center'>Adjust your meditation duration</Text>
                    <View>
                        <CustomButton title='10 seconds' onPress={() => handlePress(10)} containerStyles='mb-5' />
                        <CustomButton title='5 minutes' onPress={() => handlePress(5 * 60)} containerStyles='mb-5' />
                        <CustomButton title='10 minutes' onPress={() => handlePress(10 * 60)} containerStyles='mb-5' />
                        <CustomButton title='15 minutes' onPress={() => handlePress(15 * 60)} containerStyles='mb-5' />
                    </View>
                </View>
            </AppGradient>
        </View>
    );
};

export default AdjustMeditationDuration;