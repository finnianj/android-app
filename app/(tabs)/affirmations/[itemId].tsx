import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';

const AffirmationPractice = () => {
    const { itemId } =  useLocalSearchParams();

    const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
    
    useEffect(() => {
        for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
            const affirmationData = AFFIRMATION_GALLERY[idx].data;
            const affirmationToStart = affirmationData.find((affirmation) => affirmation.id === Number(itemId));
            if (affirmationToStart) {
                setAffirmation(affirmationToStart);
                return;
            }
        }
    }, [itemId]);

    return (
        <View>
        <Text>Affirmation Practice</Text>
        </View>
    );
};

export default AffirmationPractice;