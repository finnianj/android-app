import React, { Component } from 'react'
import { FlatList, ImageBackground, ImageSourcePropType, Pressable, Text, View } from 'react-native'
import AppGradient from '@/components/AppGradient'
import { StatusBar } from 'expo-status-bar'

import Birds from '@/constants/BirdData'
import { BIRD_IMAGES } from '@/constants/bird-images'

import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'

function shuffleArray<T>(array: T[]): T[] {
  // Create a copy of the array to avoid mutating the original array
  const shuffledArray = array.slice();
  
  // Fisher-Yates shuffle algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      const j = Math.floor(Math.random() * (i + 1));
      
      // Swap elements at indices i and j
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  
  return shuffledArray;
}


export function BirdIndex() {
    const shuffledBirds = shuffleArray(Birds);

    return (
      <View className='flex-1'>
        <StatusBar style='light' />
        <AppGradient colors={['#1A3636', '#40534C', '#677D6A', '#D6BD98']}>
          <View className='mb-6'>
            <Text className='text-gray-200 mb-3 font-bold text-4xl text-left'>Welcome! 👋</Text>
            <Text className='text-gray-200 font-medium text-xl'>Start learning about common birds today.</Text>
          </View>
          <View>
            <FlatList 
              data={shuffledBirds} 
              className='mb-[120px]' 
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <>
                  <Pressable 
                    onPress={() => router.push(`/bird/${item.id}`)}
                    className='h-48 my-3 rounded-md overflow-hidden'
                  >
                    <ImageBackground
                      source={BIRD_IMAGES[item.id] as ImageSourcePropType}
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
                  {/* Add padding below last item */}
                  {item.id === shuffledBirds[shuffledBirds.length - 1].id && <View className='mb-4' />}
                </>
              )} 
            />
          </View>
        </AppGradient>
      </View>
    )
}

export default BirdIndex;
