import React, { useState, useRef, useEffect } from 'react';
import { ImageBackground, View, Text, Pressable, ImageSourcePropType } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

import Birds, { AUDIO_FILES } from '@/constants/BirdData';
import { BIRD_IMAGES } from '@/constants/bird-images';

import AppGradient from '@/components/AppGradient';
import { AntDesign } from '@expo/vector-icons';

import { Audio, AVPlaybackStatus } from 'expo-av';

const Bird = () => {
    const { id } =  useLocalSearchParams();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const soundRef = useRef<Audio.Sound | null>(null);

   
    useEffect(() => {
        // Async function to load audio
        (async () => {
            try {
                // Unload previous sound if it exists
                if (soundRef.current) {
                    await soundRef.current.unloadAsync();
                }

                // Create a new sound object
                const newSound = new Audio.Sound();
                // Load the audio file
                await newSound.loadAsync(AUDIO_FILES[Birds[Number(id) - 1].audio]);
                // Check if sound was loaded successfully
                const status = await newSound.getStatusAsync();
                if (status.isLoaded) {
                    setIsLoaded(true);
                    soundRef.current = newSound;
                    // Set volume to full
                    await soundRef.current.setVolumeAsync(1.0);
                    // Add status update listener
                    soundRef.current.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
                        if (status.isLoaded && status.didJustFinish) {
                            setIsPlaying(false); // Stop playback when finished
                            // Pause player
                            soundRef.current?.pauseAsync();
                            // Rewind to beginning
                            soundRef.current?.setPositionAsync(0);
                        }
                    });
                } else {
                    setIsLoaded(false);
                    console.warn("Failed to load audio");
                    // Handle the error case, such as showing a user-friendly message
                }
            } catch (error) {
                setIsLoaded(false);
                console.warn("Error loading audio:", error);
                // Handle the error case, such as showing a user-friendly message
            }
        })();

        // Cleanup function
        return () => {
            if (soundRef.current) {
                soundRef.current.unloadAsync();
            }
        };
    }, [id]);  // Dependency on `id` to reload the audio when `id` changes

    const playPauseHandler = async () => {

        if (isPlaying) {
            await soundRef.current?.pauseAsync();
            setIsPlaying(false);
        } else {
            await soundRef.current?.playAsync();
            setIsPlaying(true);
        }
    };

    return (
        <View className='flex-1'>
            <ImageBackground 
                source={BIRD_IMAGES[Number(id)] as ImageSourcePropType} 
                resizeMode='cover' 
                className='flex-1'
            >
                <AppGradient colors={['transparent', 'rgba(0,0,0,0.8)']}>
                    <Pressable onPress={() => router.back()} className='absolute top-16 left-6 z-10'>
                        <AntDesign name='leftcircleo' size={50} color='white' />
                    </Pressable>
                    <View className='flex-1 justify-center space-y-4'>
                        <Text className='text-gray-100 text-3xl font-bold text-center'>{Birds[Number(id) - 1].name}</Text>
                        {/* italic */}

                        <Text className='text-gray-100 italic text-lg text-center'>({Birds[Number(id) - 1].scientificName})</Text>
                        <Text className='text-gray-100 text-xl font-bold text-center'>{Birds[Number(id) - 1].description}</Text>
                        {isLoaded && (
                            <Pressable onPress={playPauseHandler} className='mx-auto'>
                                <AntDesign name={isPlaying ? 'pausecircleo' : 'playcircleo'} size={60} color='white' />
                            </Pressable>
                        )}
                    </View>
                    
                </AppGradient>
            </ImageBackground>
        
        </View>
    );
};

export default Bird;