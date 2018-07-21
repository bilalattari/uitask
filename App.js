/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Main from './src/home';
import Front from './src/front';
import Page from './src/2ndpage';
import Routers from './src/Routes';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <Routers />
    );
  }
}

const styles = StyleSheet.create({
  
});
