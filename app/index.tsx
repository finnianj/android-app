import { View, Text, ImageBackground } from 'react-native';

import React from 'react';
import homeImage from '@/assets/bird-images/owl.jpg';

import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import CustomButton from '@/components/CustomButton';

import AppGradient from '@/components/AppGradient';

const App = () => {
  const router = useRouter();
  return (
    <View className='flex-1'>
      <ImageBackground
        source={homeImage}
        resizeMode='cover'
        className='flex-1 fixed top-0 left-0 w-full h-full'
      >
        <AppGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.7)']}>
            <SafeAreaView className='flex-1 px-1 justify-between'>
              <View>
                <Text className='text-white text-center text-4xl font-bold'>
                  Avian Explorer
                </Text>
                <Text className='text-white text-center text-lg mt-3'>
                  Get to know some of the world's most common birds!
                </Text>
              </View>
              <View>
                <CustomButton
                  containerStyles='bg-transparent border border-white'
                  textStyles='text-white'
                  onPress={() => router.push("/bird-index")}
                  title='Start'
                />
              </View>
            </SafeAreaView>
        </AppGradient>
        <StatusBar style='light' />

      </ImageBackground>
    </View>
  );
}

export default App;