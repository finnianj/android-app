import React, { Component } from 'react'
import { FlatList, ImageBackground, Pressable, Text, View } from 'react-native'
import AppGradient from '@/components/AppGradient'
import { StatusBar } from 'expo-status-bar'

import { MEDITATION_DATA } from '@/constants/MeditationData'
import MEDITATION_IMAGES from '@/constants/meditation-images'
import { LinearGradient } from 'expo-linear-gradient'

export function NatureMeditate() {
    return (
      <View className='flex-1'>
        <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
          <View className='mb-6'>
            <Text className='text-gray-200 mb-3 font-bold text-4xl text-left'>Welcome, Finn!</Text>
            <Text className='text-indigo-100 font-medium text-xl'>Start your meditation practice today.</Text>
            <StatusBar style='light' />
          </View>
          <View>
            <FlatList 
              data={MEDITATION_DATA} 
              className='mb-40' 
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Pressable 
                  onPress={() => console.log('Pressed')}
                  className='h-48 my-3 rounded-md overflow-hidden'
                >
                  <ImageBackground
                    source={MEDITATION_IMAGES[item.id - 1]}
                    resizeMode='cover'
                    className='flex-1 rounded-lg justify-center'
                  >
                    <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} className='flex-1 justify-center items-center'>
                      <Text className='text-gray-100 text-3xl font-bold text-center'>{item.title}</Text>
                    </LinearGradient>
                  </ImageBackground>
                </Pressable>
              )} 
            />
          </View>
        </AppGradient>
      </View>
    )
}

export default NatureMeditate
