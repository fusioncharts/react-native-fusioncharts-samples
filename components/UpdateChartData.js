import React, { Component } from "react";
import FusionCharts from 'react-native-fusioncharts';
import { View, Text, StyleSheet, Platform, Button, Alert } from 'react-native';

class UpdateChartData extends Component {

  constructor(props) {
    super(props);
    this.changeData = this.changeData.bind(this);
    this.state = {
      type: "column2d",
      width: "100%",
      height: "100%",
      dataFormat: "json",
      dataSource: {
        chart: {
          caption: "Countries With Most Oil Reserves [2017-18]",
          subCaption: "In MMbbl = One Million barrels",
          xAxisName: "Country",
          yAxisName: "Reserves (MMbbl)",
          numberSuffix: "K",
          theme: "fusion",
          updateAnimDuration: "0.4"
        },
        data: [
          {
            label: "Venezuela",
            value: "290"
          },
          {
            label: "Saudi",
            value: "260"
          },
          {
            label: "Canada",
            value: "180"
          },
          {
            label: "Iran",
            value: "140"
          },
          {
            label: "Russia",
            value: "115"
          },
          {
            label: "UAE",
            value: "100"
          },
          {
            label: "US",
            value: "30"
          },
          {
            label: "China",
            value: "30"
          }
        ]
      }
    };
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: { uri: "file:///android_asset/fusioncharts.html" },
      ios: require("../assets/fusioncharts.html")
    });
  }

  changeData() {
    let dataSource = this.state.dataSource;
    dataSource.data[2].value = this.getRandomNumber();
    dataSource.data[3].value = this.getRandomNumber();
    this.setState({
      dataSource: dataSource
    })
  }

  /*
      Get a random number from 50 to 300
    */
  getRandomNumber() {
    var max = 300, min = 50;
    return Math.round(((max - min) * Math.random()) + min);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hello</Text>
        <View style={styles.chartContainer}>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title='Update Chart Data' onPress={this.changeData} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 16
  },
  chartContainer: {
    height: 400,
    borderColor: '#000',
    borderWidth: 2
  },
  buttonContainer: {
    alignItems: 'center',
    padding: 10,
    marginTop: 10
  }
});

export default UpdateChartData;
