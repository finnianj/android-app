import { Tabs } from 'expo-router';
import React from 'react';
import Colors from '@/constants/Colors';

import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.primary }}>
        <Tabs.Screen 
            name='bird-index' 
            options={{ 
                tabBarLabel: 'Birds', 
                tabBarIcon:  ({ color }) => <MaterialCommunityIcons name="bird" size={24} color={color} />
            }} 
        />
        <Tabs.Screen 
            name='countries' 
            options={{ 
                tabBarLabel: 'Countries', 
                tabBarIcon:  ({ color }) => <Entypo name="globe" size={24} color={color} />
            }} 
        />
    </Tabs>
  );
};

export default TabLayout;