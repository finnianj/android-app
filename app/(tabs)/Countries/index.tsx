import AppGradient from '@/components/AppGradient';
import CountryData from '@/constants/CountryData';
import CountryGallery from '@/components/CountryGallery';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const Countries = () => {
  return (
    <View className='flex-1'>
        <AppGradient colors={['#2e1f58', '#54426b', '#a790af']}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text className='text-zinc-50 text-3xl font-bold'>Discover birds by country</Text>
                <View>
                    {CountryData.data.map((c) => (
                        <CountryGallery 
                            key={c.id} 
                            name={c.name} 
                            data={c.birds} 
                        />
                    ))}
                </View>
            </ScrollView>
        </AppGradient>
    </View>
  );
};

export default Countries;