import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import React from 'react';
import { View, Text } from 'react-native';

interface GuidedAffirmationsGalleryProps {
    title: string;
    previews: GalleryPreviewData[];
}


const GuidedAffirmationsGallery = ({ title, previews }: GuidedAffirmationsGalleryProps) => {
  return (
    <View className='my-5'>
        <View className='mb-2'>
            <Text className='text-white text-xl font-bold'>{title}</Text>
        </View>
    </View>
  );
};

export default GuidedAffirmationsGallery;