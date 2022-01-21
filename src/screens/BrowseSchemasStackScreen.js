/*  Copyright 2022 Dev Mindset Community Interest Company

    This file is part of LibreSchemas Client using React Native Expo.

    LibreSchemas Client using React Native Expo is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    LibreSchemas Client using React Native Expo is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License along with LibreSchemas Client using React Native Expo. If not, see <https://www.gnu.org/licenses/>.

    The LibreSchemas Client using React Native Expo App Store Exception is an additional permission under section 7 of the GNU Affero General Public License, version 3 ("AGPLv3") that applies to to this file. The purpose of LibreSchemas Client using React Native Expo App Store Exception is to allow distribution of the software through an app store, even if that store has restrictive terms and conditions that are incompatible with the AGPLv3 or later versions ("AGPLv3+"), provided that the source is also available under the AGPLv3+ with or without this permission through a channel without those restrictive terms and conditions.
*/
import React, { useState }   from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BrowseSchemasScreen from "./BrowseSchemasStack/BrowseSchemasScreen";
import SchemeEventsScreen from "./BrowseSchemasStack/SchemeEventsScreen";
import SchemaEventTabScreen from "./BrowseSchemasStack/SchemaEventTabScreen";

const BrowseSchemasStack = createNativeStackNavigator();
const BrowseSchemasStackScreen = ({navigation, route}) => (
  <BrowseSchemasStack.Navigator>
    <BrowseSchemasStack.Screen name="Schemas" component={BrowseSchemasScreen} options={{ headerShown: false }}/>
    {/* <BrowseSchemasStack.Screen name="Schema Events" component={SchemeEventsScreen} options={{ headerShown: false }}/>
    <BrowseSchemasStack.Screen name="Schema Event" component={SchemaEventTabScreen} options={{ headerShown: false }}/> */}
  </BrowseSchemasStack.Navigator>
);
  
export default BrowseSchemasStackScreen;
