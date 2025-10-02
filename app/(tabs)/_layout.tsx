import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Feather, FontAwesome6 } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarInactiveTintColor: "black",
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={25} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Trò chuyện',
          tabBarIcon: ({ color }) => <FontAwesome6 size={25} name="comment" color={color} />,
        }}
      />
       <Tabs.Screen
        name="call"
        options={{
          title: 'C.gọi',
          tabBarIcon: ({ color }) => <Feather size={25} name="phone" color={color} />,
        }}
      />
    </Tabs>
  );
}
