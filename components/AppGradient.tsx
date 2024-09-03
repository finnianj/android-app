import { LinearGradient } from 'expo-linear-gradient'
import React, { Component } from 'react'
import Content from './Content'

export function AppGradient({ children, colors } : { children: React.ReactNode, colors: string[] }) {
    return (
        <LinearGradient className='flex-1' colors={colors}>
            <Content>
                {children}
            </Content>
        </LinearGradient>
    )
}

export default AppGradient
