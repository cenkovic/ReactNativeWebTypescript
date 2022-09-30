import React, { FC } from 'react'
import { HomeScreen } from '@src/screens/Home/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from '@src/components/ThemeProvider/ThemeProvider'
import HomeIcon from '@src/assets/icons/HomeIcon'
import SettingsIcon from '@src/assets/icons/SettingsIcon'
import { SettingsScreen } from '@src/screens/Settings/SettingsScreen'
import { useTranslation } from 'react-i18next'

const Icons = new Map<string, FC>([
  ['Home', HomeIcon],
  ['Settings', SettingsIcon]
])

const Tab = createBottomTabNavigator()

export const TabNavigation: FC = () => {
  const { theme } = useTheme()
  const { t } = useTranslation()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        t,
        tabBarActiveTintColor: theme.colors.secondary.dark,
        tabBarInactiveTintColor: theme.colors.secondary.contrastText,
        tabBarIcon: ({ color, size }) => {
          const Icon = Icons.get(route.name) ?? HomeIcon
          return (
            <Icon
              width={size}
              height={size}
              color={color}
              fill={color}
              key={route.key}
            />
          )
        }
      })}>
      <Tab.Screen
        name={'Home'}
        component={HomeScreen}
        options={{ title: t('Home') }}
      />
      <Tab.Screen
        name={'Settings'}
        component={SettingsScreen}
        options={{ title: t('Settings') }}
      />
    </Tab.Navigator>
  )
}
