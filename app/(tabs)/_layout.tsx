import { Tabs } from 'expo-router';
import React from 'react';
import Colors from '@/constants/Colors';

import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.primary }}>
        <Tabs.Screen 
            name='nature-meditate' 
            options={{ 
                tabBarLabel: 'Meditate', 
                tabBarIcon:  ({ color }) => <Entypo name='open-book' size={24} color={color} />
            }} 
        />
        <Tabs.Screen 
            name='affirmations' 
            options={{ 
                tabBarLabel: 'Affirmations', 
                tabBarIcon:  ({ color }) => <Entypo name='open-book' size={24} color={color} />
            }} 
        />
    </Tabs>
  );
};

export default TabLayout;