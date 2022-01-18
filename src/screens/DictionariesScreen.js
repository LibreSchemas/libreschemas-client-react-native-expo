/*  Copyright 2022 Dev Mindset Community Interest Company

    This file is part of LibreSchemas Client using React Native Expo.

    LibreSchemas Client using React Native Expo is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    LibreSchemas Client using React Native Expo is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License along with LibreSchemas Client using React Native Expo. If not, see <https://www.gnu.org/licenses/>.

    The LibreSchemas Client using React Native Expo App Store Exception is an additional permission under section 7 of the GNU Affero General Public License, version 3 ("AGPLv3") that applies to to this file. The purpose of LibreSchemas Client using React Native Expo App Store Exception is to allow distribution of the software through an app store, even if that store has restrictive terms and conditions that are incompatible with the AGPLv3 or later versions ("AGPLv3+"), provided that the source is also available under the AGPLv3+ with or without this permission through a channel without those restrictive terms and conditions.
*/

import React, { useEffect, useState }   from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import * as Linking from 'expo-linking';

const DictionariesScreen = ({ navigation }) => {
    return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                <View style={{ width: "90%", flexDirection: 'column', justifyContent: "center", paddingLeft: 25}}>
                    <Text style={{ fontSize: 14, paddingTop: 10 }}>Dictionaries are helpful in understanding language. Do checkout these dictionaries.</Text>

                    <View style={{ width: "100%", justifyContent: "center", paddingTop: 20 }}>
                        <Card mode="outlined">
                            <Card.Content>
                            <Title>Urban Dictionary</Title>
                            <Paragraph>A user generated dictionary that can be helpful in understanding slang or cultural words.</Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={() =>{Linking.openURL('https://www.urbandictionary.com')}} mode="contained" color={"#1A5653"}>Visit Website</Button>
                            </Card.Actions>
                        </Card>
                    </View>

                    <View style={{ width: "100%", paddingTop: 20}}>
                        <Card mode="outlined">
                            <Card.Content>
                            <Title>Oxford English Dictionary</Title>
                            <Paragraph>The historical dictionary of the English language first published in 1884.</Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={() =>{Linking.openURL('https://www.oed.com')}} mode="contained" color={"#1A5653"}>Visit Website</Button>
                            </Card.Actions>
                        </Card>
                    </View>

                    <View style={{ width: "100%", paddingTop: 20}}>
                        <Card mode="outlined">
                            <Card.Content>
                            <Title>Merriam-Webster American English Dictionary</Title>
                            <Paragraph>A 150-year-old American English Dictionary used widely in the USA.</Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={() =>{Linking.openURL('https://www.merriam-webster.com')}} mode="contained" color={"#1A5653"}>Visit Website</Button>
                            </Card.Actions>
                        </Card>
                    </View>

                    <View style={{ width: "100%", paddingTop: 20, paddingBottom: 20}}>
                        <Card mode="outlined">
                            <Card.Content>
                            <Title>Macquarie Australian English Dictionary</Title>
                            <Paragraph>Recognised since its first publication in 1981 as the standard authority on the English language in Australia.</Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={() =>{Linking.openURL('https://www.macquariedictionary.com.au')}} mode="contained" color={"#1A5653"}>Visit Website</Button>
                            </Card.Actions>
                        </Card>
                    </View>
                </View>
                </ScrollView>
        </View>
      );
};

export default DictionariesScreen;