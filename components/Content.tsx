import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export function Content({ children } : { children: React.ReactNode }) {
    return (
        <SafeAreaView className='flex-1 px-5 py-3'>
                {children}
        </SafeAreaView>
    )
}

export default Content
