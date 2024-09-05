import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, ImageSourcePropType, Pressable, ScrollView } from 'react-native';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import AppGradient from '@/components/AppGradient';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

const AffirmationPractice = () => {
    const { itemId } =  useLocalSearchParams();

    const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
    const [sentences, setSentences] = useState<string[]>([]);
    
    useEffect(() => {
        for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
            const affirmationData = AFFIRMATION_GALLERY[idx].data;
            const affirmationToStart = affirmationData.find((affirmation) => affirmation.id === Number(itemId));
            if (affirmationToStart) {
                setAffirmation(affirmationToStart);
                const affirmationArray = affirmationToStart.text.split('.');

                // Remoce the last empty string
                if (affirmationArray[affirmationArray.length - 1] === '') {
                    affirmationArray.pop();
                }

                setSentences(affirmationArray);
                return;
            }
        }
    }, [itemId]);

    return (
        <View className='flex-1'>
            <ImageBackground 
                source={affirmation?.image as ImageSourcePropType} 
                resizeMode='cover' 
                className='flex-1'
            >
                <AppGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.9)']}>
                    <Pressable onPress={() => router.back()} className='absolute top-16 left-6 z-10'>
                        <AntDesign name='leftcircleo' size={50} color='white' />
                    </Pressable>

                    <ScrollView className='mt-20' showsVerticalScrollIndicator={false}>
                        <View className='h-full justify-center'>
                            <View className='h-4/5 justify-center'>
                                {sentences.map((sentence, idx) => (
                                    <Text key={idx} className='text-white text-2xl font-bold text-center mb-4'>{sentence}.</Text>
                                ))}
                            </View>
                        </View>
                    </ScrollView>
                </AppGradient>
            </ImageBackground>
        </View>
    );
};

export default AffirmationPractice;