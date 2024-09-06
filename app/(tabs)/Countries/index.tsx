import AppGradient from '@/components/AppGradient';
import CountryData from '@/constants/CountryData';
import CountryGallery from '@/components/CountryGallery';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const Countries = () => {
  return (
    <View className='flex-1'>
        <AppGradient colors={['#0C134F', '#1D267D', '#5C469C']}>
            <ScrollView showsVerticalScrollIndicator={false} className='translate-y-4'>
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