/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  TouchableNativeFeedback,
  Animated,
  Easing,
  Alert
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import { createStackNavigator } from 'react-navigation';
import PlainColumn2D from './components/PlainColumn2D';
import PieChart3D from './components/PieChart3D';
import UpdateChartData from './components/UpdateChartData';
import ListenEvents from './components/ListenEvents';
import DrillDown from './components/DrillDown';
import Gauge from './components/Gauge';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

type Props = {};
class App extends Component<Props> {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows([
        { id: '0', value: 'General Column2d', path: 'PlainColumn2D' },
        { id: '1', value: '3D Pie Chart', path: 'PieChart3D' },
        { id: '2', value: 'Update Chart Data', path: 'UpdateChartData' },
        { id: '3', value: 'Listen to events from chart', path: 'ListenEvents' },
        { id: '4', value: 'Drill down', path: 'DrillDown' },
        { id: '5', value: 'Gauge', path: 'Gauge' },
        {
          id: '6',
          value: 'Change chart type at runtime',
          path: 'ChartRunTime'
        },
        { id: '7', value: 'Theme', path: 'Theme' }
      ]),
      seletedComponentIndex: -1
    };

    this.renderComponents = this.renderComponents.bind(this);
  }

  renderComponents(rowData) {
    let { path, id, value } = rowData;
    this.props.navigation.navigate(path);
  }

  renderListItem(rowData) {
    return (
      <Ripple onPress={() => this.renderComponents(rowData)}>
        <View
          style={{
            padding: 20,
            margin: 4,
            backgroundColor: '#59d99d',
            borderRadius: 5,
            shadowOpacity: 0.4,
            shadowRadius: 3,
            shadowColor: '#000',
            shadowOffset: { height: 0, width: 0 }
          }}
        >
          <Text
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#FFFFFF',
              fontSize: 22
            }}
          >
            {rowData.value}
          </Text>
        </View>
      </Ripple>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this.renderListItem.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  list: {
    marginTop: 16,
    width: '95%'
  }
});

export default createStackNavigator(
  {
    Home: App,
    PlainColumn2D: PlainColumn2D,
    PieChart3D: PieChart3D,
    UpdateChartData: UpdateChartData,
    ListenEvents: ListenEvents,
    DrillDown: DrillDown,
    Gauge: Gauge
    // Gauge,
    // ChartRunTime,
    // Theme
  },
  {
    initialRouteName: 'Home'
  }
);
