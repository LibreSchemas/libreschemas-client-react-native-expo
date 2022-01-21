/*  Copyright 2022 Dev Mindset Community Interest Company

    This file is part of LibreSchemas Client using React Native Expo.

    LibreSchemas Client using React Native Expo is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    LibreSchemas Client using React Native Expo is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License along with LibreSchemas Client using React Native Expo. If not, see <https://www.gnu.org/licenses/>.

    The LibreSchemas Client using React Native Expo App Store Exception is an additional permission under section 7 of the GNU Affero General Public License, version 3 ("AGPLv3") that applies to to this file. The purpose of LibreSchemas Client using React Native Expo App Store Exception is to allow distribution of the software through an app store, even if that store has restrictive terms and conditions that are incompatible with the AGPLv3 or later versions ("AGPLv3+"), provided that the source is also available under the AGPLv3+ with or without this permission through a channel without those restrictive terms and conditions.
*/

import React, { useEffect, useState }   from "react";
import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import { List } from 'react-native-paper';
import * as Linking from 'expo-linking';

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingBottom: 75,
    },
    item: {
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: "#1A5653",
    },
});

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <ScreenContainer>
            <View style={styles.container}>
                <List.Item
                    title="LibreSchemas Datasets" titleStyle={{ fontWeight: "bold", color: "#ffff00"}}
                    description="General schemas for common social situations." descriptionStyle={{ color: "white" }}
                    left={props => <List.Icon color={"white"} icon="currency-sign" />}
                    style={styles.item}
                    onPress={() =>
                        navigation.navigate('Browse Schemas')
                    }
                />
                <View style={{ alignItems: "center" }}>
                    <Image style={{ aspectRatio: 1, width: "75%", height: undefined, resizeMode:"cover" }} resizemode="cover" source={require('../../assets/libreschemas_logo.png')} />
                    <Text style={{ marginHorizontal: 16 }}>Visit <Text style={{ color: 'blue'}} onPress={() =>{Linking.openURL('https://www.LibreSchemas.org')}}>LibreSchemas.org</Text> for the latest updates on our Free and Open Source Software. We would appreciate contributions to our public repositories on <Text style={{ color: 'blue'}} onPress={() =>{Linking.openURL('https://github.com/LibreSchemas')}}>GitHub</Text>.</Text>
                </View>     
            </View>
            </ScreenContainer>
        </ScrollView>
      );
};

export default HomeScreen;