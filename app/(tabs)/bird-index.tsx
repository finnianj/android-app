import React, { Component } from 'react'
import { FlatList, ImageBackground, ImageSourcePropType, Pressable, Text, View } from 'react-native'
import AppGradient from '@/components/AppGradient'
import { StatusBar } from 'expo-status-bar'

import Birds from '@/constants/BirdData'
import { BIRD_IMAGES } from '@/constants/bird-images'

import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'


export function BirdIndex() {
    return (
      <View className='flex-1'>
        <AppGradient colors={['#1A3636', '#40534C', '#677D6A', '#D6BD98']}>
          <View className='mb-6'>
            <Text className='text-gray-200 mb-3 font-bold text-4xl text-left'>Welcome!</Text>
            <Text className='text-gray-200 font-medium text-xl'>Start learning about common birds today.</Text>
            <StatusBar style='light' />
          </View>
          <View>
            <FlatList 
              data={Birds} 
              className='mb-[120px]' 
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <>
                  <Pressable 
                    onPress={() => router.push(`/bird/${item.id}`)}
                    className='h-48 my-3 rounded-md overflow-hidden'
                  >
                    <ImageBackground
                      source={BIRD_IMAGES[Number(item.id)] as ImageSourcePropType}
                      resizeMode='cover'
                      // className='flex-1 rounded-lg justify-center'
                      style={{ width: '100%', height: 300, justifyContent: 'flex-start' }} // Height is adjustable
                      className='flex-1 rounded-lg'
                    >
                      <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} className='flex-1 justify-center items-center'>
                        <Text className='text-gray-100 text-3xl font-bold text-center'>{item.name}</Text>
                      </LinearGradient>
                    </ImageBackground>
                  </Pressable>
                  {/* If last item, add padding below */}
                  {Number(item.id) === Birds.length && <View className='pb-4' />}
                </>
              )} 
            />
          </View>
        </AppGradient>
      </View>
    )
}

export default BirdIndex;
