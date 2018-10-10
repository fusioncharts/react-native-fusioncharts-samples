import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert } from 'react-native';
import FusionCharts from 'react-native-fusioncharts';

export default class ChartRunTime extends Component {
  constructor(props) {
    super(props);
    this.apiCaller = null;
    this.state = {
      type: 'column2d',
      width: '100%',
      height: '100%',
      dataFormat: 'json',
      chartType: '',
      dataSource: {
        chart: {
          caption: 'Recommended Portfolio Split',
          subCaption: 'For a net-worth of $1M',
          showValues: '1',
          showPercentInTooltip: '0',
          numberPrefix: '$',
          enableMultiSlicing: '1',
          theme: 'fusion'
        },
        data: [
          {
            label: 'Equity',
            value: '300000'
          },
          {
            label: 'Debt',
            value: '230000'
          },
          {
            label: 'Bullion',
            value: '180000'
          },
          {
            label: 'Real-estate',
            value: '270000'
          },
          {
            label: 'Insurance',
            value: '20000'
          }
        ]
      }
    };
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: { uri: 'file:///android_asset/fusioncharts.html' },
      ios: require('../assets/fusioncharts.html')
    });
  }

  changeType(type) {
    this.setState({ chartType: type }, () => {
      this.apiCaller(`window.chartObj.chartType('${type}')`);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>A Column 2D Chart</Text>
        <View style={styles.chartContainer}>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
            onInitialized={caller => {
              this.apiCaller = caller;
              if (this.state.chartType === '')
                this.setState({ chartType: this.state.type });
            }}
          />
        </View>
        <Text style={styles.info}>Press button to change chart type</Text>
        <View style={styles.buttonContainer}>
          <Button
            disabled={
              this.state.chartType === '' || this.state.chartType == 'column2d'
            }
            style={{ margin: 8 }}
            title="Column2D"
            onPress={() => this.changeType('column2d')}
          />
          <Button
            disabled={
              this.state.chartType === '' || this.state.chartType == 'pie2d'
            }
            title="Pie2D"
            onPress={() => this.changeType('pie2d')}
          />
          <Button
            disabled={
              this.state.chartType === '' || this.state.chartType == 'bar2d'
            }
            title="Bar2D"
            onPress={() => this.changeType('bar2d')}
          />
        </View>
      </View>
    );
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
    paddingBottom: 10
  },
  chartContainer: {
    height: 400,
    borderColor: '#000',
    borderWidth: 1
  },
  buttonContainer: {
    padding: 10,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5
  }
});
