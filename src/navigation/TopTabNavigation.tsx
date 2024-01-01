import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {MenuListScreen} from '../screens/MenuList';
import {ReviewListScreen} from '../screens/Home/ReviewList';
import {Colors} from '../styles/Colors';
// import {RestaurantDetail
// sScreen} from '../screen
// s/RestaurantDetails/RestaurantDetailsScreen';
import {RestaurantDetailsScreen} from '../screens/RestaurantDetails';
import {TopTapParamList} from './types';
import {Animated, View, TouchableOpacity} from 'react-native';
import FontStyle from '../styles/FontStyle';
import {useTranslation} from 'react-i18next';

// Import your screens or components for each tab

const Tab = createMaterialTopTabNavigator<TopTapParamList>();

function MyTabBar({state, descriptors, navigation, position}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        padding: 9,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              height: 24,

              justifyContent: 'space-between',
              borderRadius: 5,
              backgroundColor: isFocused ? Colors.white : Colors.primary,
              flex: 1,
              alignItems: 'center',
            }}>
            <Animated.Text
              style={{
                color: isFocused ? Colors.primary : Colors.white,
                ...FontStyle.CustomFont,
                fontSize: 16,
                fontWeight: 500,
              }}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TopTabNavigation = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name={t('Details')} component={RestaurantDetailsScreen} />
      <Tab.Screen name={t('Menus')} component={MenuListScreen} />
      <Tab.Screen name={t('Reviews')} component={ReviewListScreen} />
    </Tab.Navigator>
  );
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: Colors.primary},
        tabBarActiveTintColor: Colors.white,

        tabBarPressColor: Colors.primary,

        tabBarInactiveTintColor: Colors.white, // Color of the inactive tab text
      }}>
      <Tab.Screen name="Details" component={RestaurantDetailsScreen} />
      <Tab.Screen name="Menus" component={MenuListScreen} />
      <Tab.Screen name="Reviews" component={ReviewListScreen} />
    </Tab.Navigator>
  );
};

export default TopTabNavigation;
