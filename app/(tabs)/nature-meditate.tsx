import React, { Component } from 'react'
import { FlatList, ImageBackground, ImageSourcePropType, Pressable, Text, View } from 'react-native'
import AppGradient from '@/components/AppGradient'
import { StatusBar } from 'expo-status-bar'

import Birds from '@/constants/BirdData'
import { BIRD_IMAGES } from '@/constants/bird-images'

import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'


export function NatureMeditate() {
    return (
      <View className='flex-1'>
        <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
          <View className='mb-6'>
            <Text className='text-gray-200 mb-3 font-bold text-4xl text-left'>Welcome!</Text>
            <Text className='text-gray-200 font-medium text-xl'>Start learning about birds today.</Text>
            <StatusBar style='light' />
          </View>
          <View>
            <FlatList 
              data={Birds} 
              className='mb-36' 
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Pressable 
                  onPress={() => router.push(`/meditate/${item.id}`)}
                  className='h-48 my-3 rounded-md overflow-hidden'
                >
                  <ImageBackground
                    source={BIRD_IMAGES[Number(item.id)] as ImageSourcePropType}
                    resizeMode='cover'
                    className='flex-1 rounded-lg justify-center'
                  >
                    <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} className='flex-1 justify-center items-center'>
                      <Text className='text-gray-100 text-3xl font-bold text-center'>{item.name}</Text>
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
