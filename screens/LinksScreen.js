import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, TouchableHighlight} from 'react-native';
import {ExpoLinksView} from '@expo/samples';
import TabBarIcon from "../components/TabBarIcon";
import Text from "react-native-web/dist/exports/Text";
import { DrawerActions } from 'react-navigation-drawer';

export default class LinksScreen extends React.Component{
    constructor(props){
        super(props)

    }
    render() {
        return (
            <ScrollView style={styles.container}>

            </ScrollView>
        );
    }
}

LinksScreen.navigationOptions = {
    title: 'Links',
    headerLeft: <TouchableHighlight
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
    >
        <TabBarIcon name={'md-menu'}/>
    </TouchableHighlight>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: 'red',
    },
});
