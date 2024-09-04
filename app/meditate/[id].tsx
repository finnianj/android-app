import React, { useEffect } from 'react';
import { ImageBackground, View, Text, Pressable } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

import MEDITATION_IMAGES from '@/constants/meditation-images';
import AppGradient from '@/components/AppGradient';
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton';

const Meditate = () => {
    const { id } =  useLocalSearchParams();
    const [secondsRemaining, setSecondsRemaining] = React.useState(10);
    const [isMediating, setIsMediating] = React.useState(false);

    useEffect(() => {
        if (!isMediating) {
            return;
        }
        let timerId: NodeJS.Timeout;

        // Exit
        if (secondsRemaining === 0) {
            setIsMediating(false);
            return;
        } 

        // Start timer
        timerId = setTimeout(() => {
            setSecondsRemaining(secondsRemaining - 1);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [secondsRemaining, isMediating]);

    return (
        <View className='flex-1'>
            <ImageBackground 
                source={MEDITATION_IMAGES[Number(id) - 1]} 
                resizeMode='cover' 
                className='flex-1'
            >
                <AppGradient colors={['transparent', 'rgba(0,0,0,0.8)']}>
                    <Pressable onPress={() => router.back()} className='absolute top-16 left-6 z-10'>
                        <AntDesign name='leftcircleo' size={50} color='white' />
                    </Pressable>
                    <View className='flex-1 justify-center'>
                        <View className='mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center'>
                            <Text className='text-blue-800 text-4xl'>00:{secondsRemaining}</Text>
                        </View>
                    </View>
                    <View className='mb-5'>
                        <CustomButton title='Start' onPress={() => setIsMediating(true)} />
                    </View>
                </AppGradient>
            </ImageBackground>
        
        </View>
    );
};

export default Meditate;