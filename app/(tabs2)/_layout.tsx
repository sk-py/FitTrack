import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Stack } from 'expo-router';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';

export default function Tab1Layout() {

  return (
    <Stack
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Tab One',
        }}
      />
    </Stack>
  );
}
