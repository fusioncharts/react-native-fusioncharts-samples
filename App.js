/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
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
} from "react-native";
import Ripple from "react-native-material-ripple";
import PlainColumn2D from "./components/PlainColumn2D";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows([
        { id: "0", value: "General Column2d" },
        { id: "1", value: "3D Pie Chart" },
        { id: "2", value: "Update Chart Data" },
        { id: "3", value: "Events" },
        { id: "4", value: "Drill down" },
        { id: "5", value: "Gauge" },
        { id: "6", value: "Change chart type at runtime" },
        { id: "7", value: "Theme" }
      ]),
      seletedComponentIndex: -1
    };

    this.renderComponents = this.renderComponents.bind(this);
  }

  renderComponents(rowData) {
    let index = rowData.id;
    if (Number(index) == 0) {
      this.setState({ seletedComponentIndex: 0 });
    }
  }

  renderListItem(rowData) {
    return (
      <Ripple onPress={() => this.renderComponents(rowData)}>
        <View
          style={{
            padding: 20,
            margin: 4,
            backgroundColor: "#59d99d",
            borderRadius: 5,
            shadowOpacity: 0.4,
            shadowRadius: 3,
            shadowColor: "#000",
            shadowOffset: { height: 0, width: 0 }
          }}
        >
          <Text
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#FFFFFF",
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
    if (this.state.seletedComponentIndex == -1) {
      return (
        <View style={styles.container}>
          <ListView
            style={styles.list}
            dataSource={this.state.dataSource}
            renderRow={this.renderListItem.bind(this)}
          />
        </View>
      );
    } else if (this.state.seletedComponentIndex == 0) {
      return <PlainColumn2D />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  list: {
    marginTop: 32,
    width: "95%"
  }
});
