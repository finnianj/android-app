import React, { useEffect } from 'react';
import { ImageBackground, View, Text, Pressable } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

import MEDITATION_IMAGES from '@/constants/meditation-images';
import { MEDITATION_DATA, AUDIO_FILES } from '@/constants/MeditationData';
import AppGradient from '@/components/AppGradient';
import { AntDesign } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton';

import { Audio } from 'expo-av';

const Meditate = () => {
    const { id } =  useLocalSearchParams();
    const [secondsRemaining, setSecondsRemaining] = React.useState(10);
    const [isMediating, setIsMediating] = React.useState(false);
    const [audioSound, setAudioSound] = React.useState<Audio.Sound>();
    const [isAudioPlaying, setIsAudioPlaying] = React.useState(false);

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

    const toggleMeditationSessionStatus = async () => {
        if (secondsRemaining === 0) setSecondsRemaining(10);
        setIsMediating(!isMediating);
        await toggleAudio();
    }

    const toggleAudio = async () => {
        const sound = audioSound ? audioSound : await initializeAudio();
        const status = await sound?.getStatusAsync();
        if (status?.isLoaded) {
            await sound?.playAsync();
            setIsAudioPlaying(true);
        } else {
            await sound?.pauseAsync();
            setIsAudioPlaying(false);
        }
    }

    const initializeAudio = async () => {
        const audioFileName = MEDITATION_DATA[Number(id) - 1]?.audio;
        const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);
        setAudioSound(sound);
        return sound;
    }

    // Format time
    const formattedTimeMinutes = String(Math.floor(secondsRemaining / 60)).padStart(2, '0');
    const formattedTimeSeconds = String(secondsRemaining % 60).padStart(2, '0');

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
                            <Text className='text-blue-800 text-4xl font-rmono'>
                                {formattedTimeMinutes}:{formattedTimeSeconds}
                            </Text>
                        </View>
                    </View>
                    <View className='mb-5'>
                        <CustomButton title='Start' onPress={toggleMeditationSessionStatus} />
                    </View>
                </AppGradient>
            </ImageBackground>
        
        </View>
    );
};

export default Meditate;