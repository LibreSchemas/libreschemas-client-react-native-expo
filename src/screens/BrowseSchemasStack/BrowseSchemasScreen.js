/*  Copyright 2022 Dev Mindset Community Interest Company

    This file is part of LibreSchemas Client using React Native Expo.

    LibreSchemas Client using React Native Expo is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    LibreSchemas Client using React Native Expo is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License along with LibreSchemas Client using React Native Expo. If not, see <https://www.gnu.org/licenses/>.

    The LibreSchemas Client using React Native Expo App Store Exception is an additional permission under section 7 of the GNU Affero General Public License, version 3 ("AGPLv3") that applies to to this file. The purpose of LibreSchemas Client using React Native Expo App Store Exception is to allow distribution of the software through an app store, even if that store has restrictive terms and conditions that are incompatible with the AGPLv3 or later versions ("AGPLv3+"), provided that the source is also available under the AGPLv3+ with or without this permission through a channel without those restrictive terms and conditions.
*/
import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, FlatList, Pressable, ActivityIndicator } from "react-native";
import { Appbar } from 'react-native-paper';
import { useQuery, gql } from "@apollo/client";
import * as Linking from 'expo-linking';
import { WEB_URL, API_URL } from 'react-native-dotenv';


const BrowseSchemasScreen = ({navigation, route }) => {

  const styles = StyleSheet.create({
     
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#1A5653'
    },
    item: {
      backgroundColor: 'white',
      borderColor: '#000000',
      borderWidth: 1,
      padding: 3,
      marginVertical: 3,
      marginHorizontal: 5,
    },
    itembar: {
      alignItems: 'center'
    },
    title: {
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
    }  
  });  

  const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );

  const isMountedVal = useRef(1);
  const Item = ({ name, id, imageUrl, countryCodes, shortUUID, author_name, author_website, author_twitter, author_linkedin, license, license_terms }) => {

    const license_badge_image = {
      CCBYSA4: require('../../../assets/CC-BY-SA-4.0.png'),
      GPLv3: require('../../../assets/GNU-GPLv3.png'),
      AGPLv3: require('../../../assets/GNU-AGPLv3.png'),
      CC0: require('../../../assets/cc-zero.png')
    }

    let license_badge;

    switch(license){
      case "CC-BY-SA-4.0":
        license_badge = license_badge_image.CCBYSA4
       break;
      case "GNU-AGPLv3":
        license_badge = license_badge_image.AGPLv3
        break;
      case "GNU-GPLv3":
        license_badge = license_badge_image.GPLv3
        break;
      default:
        license_badge = license_badge_image.CC0
        break;
    }

    const social_icons = {
      Twitter: require('../../../assets/twitter_icon.png'),
      LinkedIn: require('../../../assets/linkedin_icon.png'),
      Website: require('../../../assets/link_icon.png')
    }

    return (
    <View style={styles.item}>
      <View style={{ flexDirection: "row"}}>
          <Image style={{ height: 180, width: 240 }} resizeMode='contain' aspectRatio={1.33} source={{ uri: `${imageUrl}` }}/>
        <View style={{ flexdirection: "column" }}>
          <Text style={{ fontWeight: "bold"}}>Author(s)</Text>
          <Text>{author_name}</Text>
          <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}>
            { (author_twitter) ?  <Pressable onPress={() => Linking.openURL(author_twitter)}>
                                  <Image style={{ height: 40, width: 40, marginRight: 5 }} resizeMode='contain' source={ social_icons.Twitter } />
                                  </Pressable> : false }
            { (author_linkedin) ?  <Pressable onPress={() => Linking.openURL(author_linkedin)}>
                                  <Image style={{ height: 40, width: 40, marginRight: 5 }} resizeMode='contain' source={ social_icons.LinkedIn } />
                                  </Pressable> : false }
            { (author_website) ?  <Pressable onPress={() => Linking.openURL(author_website)}>
                                  <Image style={{ height: 40, width: 40, marginRight: 5 }} resizeMode='contain' source={ social_icons.Website } />
                                  </Pressable> : false }
          </View>
          <Pressable onPress={() => Linking.openURL(license_terms)}>
            <Image style={{ height: 31, width: 86 }} resizeMode='contain' source={ license_badge }/>
          </Pressable>
        </View>
      </View>   
      <View style={styles.itembar}>
          <Pressable onPress={() => {
            navigation.navigate('Schema Events', {     
                docID: id,
              });
          }}>
            <Text style={styles.title}>{name}</Text>
          </Pressable>
      </View>
    </View>
    )
  }

  const renderItem = ({ item }) => (
    <Item id={ item.id } name={ item.name } imageUrl={ item.image_url} countryCodes={ item.country_code } shortUUID={ item.shortuuid} license={item.license} license_terms={item.license_terms} author_name={item.author_name} author_website={item.author_website} author_twitter={item.author_twitter} author_linkedin={item.author_linkedin}/>
  );

  function getData() {
    const LIST_SCHEMAS = gql`
      query GetSchemas {
        getSchemas {
          name
          id
          category
          country_code
          image_url
          shortuuid
          country_code
          type
          author_name
          author_email
          author_website
          author_twitter
          author_linkedin
          license
          license_terms
        }
      }
    `;
    const { data, loading, error } = useQuery(LIST_SCHEMAS, {
    })

    if (loading) {
      return <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
      <Text style={{ color: "white", fontSize: 20 }}>Loading from our online database</Text>
      <ActivityIndicator size="large"/>
    </View>
    }
    if (error) {
      // return <Text>{ JSON.stringify(error) }</Text> // Useful for debugging errors
      return <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
      <Text style={{ color: "white", fontSize: 20 }}>Error: { error.message }</Text>
      <ActivityIndicator size="large" />
    </View>
    }

    return (

      <FlatList
      persistentScrollbar={true}
      data={data.getSchemas}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
    )        

  };

    let query = getData();

    const appBarContentTitle = 'LibreSchemas Datasets'
    const appBarContentSubTitle = 'Choose a Schema.'

    const _goBack = () => { navigation.navigate('Home')};

     return (
       <ScreenContainer>
        <Appbar.Header statusBarHeight={0} style={{ backgroundColor: '#1A5653' }}>
          <Appbar.BackAction onPress={_goBack} />
          <Appbar.Content title={appBarContentTitle} subtitle={appBarContentSubTitle} />
        </Appbar.Header>
         <View style={{ flex: 1, width: '100%' }}>
          {query}
         </View>
       </ScreenContainer>
     );
};


  
export default BrowseSchemasScreen;
