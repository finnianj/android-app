import { View, Text, ImageBackground } from 'react-native';

import React from 'react';
import beachImage from '@/assets/meditation-images/beach.webp';
import { LinearGradient } from 'expo-linear-gradient';
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
        source={beachImage}
        resizeMode='cover'
        className='flex-1 fixed top-0 left-0 w-full h-full'
      >
        <AppGradient colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}>
            <SafeAreaView className='flex-1 px-1 justify-between'>
              <View>
                <Text className='text-white text-center text-4xl font-bold'>
                  Simple Meditation
                </Text>
                <Text className='text-white text-center text-lg mt-3'>
                  stuff
                </Text>
              </View>
              <View>
                <CustomButton
                  onPress={() => router.push('/nature-meditate')}
                  title='Start'
                />
              </View>
              <StatusBar style='light' />
            </SafeAreaView>
        </AppGradient>
        
      </ImageBackground>
    </View>
  );
}

export default App;