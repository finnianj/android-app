import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import { BIRD_IMAGES } from '@/constants/bird-images';
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, FlatList, Pressable, Image, ImageProps, ImageSourcePropType } from 'react-native';
import CountryData from '@/constants/CountryData';

interface CountryGalleryProps {
    name: string;
    data: number[];
}

const CountryGallery = ({ name, data }: CountryGalleryProps) => {
  return (
    <View className='my-5'>
        <View className='mb-2'>
            <Text className='text-white text-xl font-bold'>{name}</Text>
        </View>
        <View className='space-y-2'>
            <FlatList
                data={data}
                showsHorizontalScrollIndicator={false}
                keyExtractor={name => name.toString()}
                horizontal
                renderItem={({ item }) => (
                    <Link href={`/bird/${item}`} asChild>
                        <Pressable>
                            <View className='h-36 w-32 rounded-md mr-4'>
                                <Image source={BIRD_IMAGES[item] as ImageSourcePropType} resizeMode='cover' className='w-full h-full' />
                            </View>
                        </Pressable>
                    </Link>
                )}
            />
        </View>
    </View>
  );
};

export default CountryGallery;