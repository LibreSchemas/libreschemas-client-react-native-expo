/*  Copyright 2022 Dev Mindset Community Interest Company

    This file is part of LibreSchemas Client using React Native Expo.

    LibreSchemas Client using React Native Expo is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    LibreSchemas Client using React Native Expo is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License along with LibreSchemas Client using React Native Expo. If not, see <https://www.gnu.org/licenses/>.

    The LibreSchemas Client using React Native App Store Exception is an additional permission under section 7 of the GNU Affero General Public License, version 3 ("AGPLv3") that applies to to this file. The purpose of LibreSchemas Client using React Native Expo App Store Exception is to allow distribution of the software through an app store, even if that store has restrictive terms and conditions that are incompatible with the AGPLv3 or later versions ("AGPLv3+"), provided that the source is also available under the AGPLv3+ with or without this permission through a channel without those restrictive terms and conditions.
*/

import React, { useEffect, useState }   from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Linking from 'expo-linking';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ width: "90%", flexDirection: 'column', justifyContent: "center", paddingLeft: 25, paddingTop: 20}}>
                    <Text style={{ fontWeight: 'bold' }}>Copyright 2022 Dev Mindset Community Interest Company</Text>
                    <Text>
                        LibreSchemas Client using React Native Expo is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
                    </Text>
                    <Text style={{ paddingTop: 20 }}>
                        LibreSchemas Client using React Native Expo is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
                    </Text>
                    <Text style={{ paddingTop: 20 }}>
                        You should have received a copy of the GNU Affero General Public License along with LibreSchemas Client using React Native Expo. If not, see <Text style={{ color: 'blue'}} onPress={() =>{Linking.openURL('https://www.gnu.org/licenses')}} >https://www.gnu.org/licenses</Text>.
                    </Text>
                    <Text style={{ paddingTop: 20 }}>
                        The LibreSchemas Client using React Native Expo App Store Exception is an additional permission under section 7 of the GNU Affero General Public License, version 3 ("AGPLv3") that applies to to this file. The purpose of LibreSchemas Client using React Native Expo App Store Exception is to allow distribution of the software through an app store, even if that store has restrictive terms and conditions that are incompatible with the AGPLv3 or later versions ("AGPLv3+"), provided that the source is also available under the AGPLv3+ with or without this permission through a channel without those restrictive terms and conditions.
                    </Text>
                </View>
            </ScrollView>
        </View>
      );
};

export default HomeScreen;