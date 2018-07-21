import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Main from './home';
import Front from './front';
import Page from './2ndpage';
export default class Routers extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">

                    <Scene key="Main"
                        hideNavBar={true}
                        component={Main}
                        title="Main"
                    />
                    <Scene key="front"
                        hideNavBar={true}
                        component={Front}
                        initial
                    />
                    <Scene key="Page"
                        hideNavBar={true}
                        component={Page}
                        title="Page"
                    />
                </Scene>
            </Router>
        )
    }
}