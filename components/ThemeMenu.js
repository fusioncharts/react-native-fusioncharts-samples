import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import FusionCharts from 'react-native-fusioncharts';

export default class ThemeMenu extends Component {
  constructor(props) {
    super(props);
    this.activatedColor = '#8cd46a';
    this.apiCaller = null;

    this.state = {
      selectedTheme: 'fusion',
      btnDisabled: true,
      type: 'column2d',
      width: '100%',
      height: '100%',
      dataFormat: 'json',
      dataSource: {
        chart: {
          caption: 'Countries With Most Oil Reserves [2017-18]',
          subCaption: 'In MMbbl = One Million barrels',
          xAxisName: 'Country',
          yAxisName: 'Reserves (MMbbl)',
          numberSuffix: 'K',
          theme: 'fusion'
        },
        data: [
          {
            label: 'Venezuela',
            value: '290'
          },
          {
            label: 'Saudi',
            value: '260'
          },
          {
            label: 'Canada',
            value: '180'
          },
          {
            label: 'Iran',
            value: '140'
          },
          {
            label: 'Russia',
            value: '115'
          },
          {
            label: 'UAE',
            value: '100'
          },
          {
            label: 'US',
            value: '30'
          },
          {
            label: 'China',
            value: '30'
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

  changeTheme(theme) {
    this.setState({
      selectedTheme: theme
    })
    this.apiCaller(`window.chartObj.setChartAttribute('theme', '${theme}')`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Choose from multiple themes</Text>
        <View style={styles.chartContainer}>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath}
            onInitialized={(caller) => {
              this.setState({ btnDisabled: false });
              this.apiCaller = caller;
            }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Fusion" disabled={this.state.btnDisabled} onPress={() => this.changeTheme('fusion')} color={this.state.selectedTheme === 'fusion' ? this.activatedColor : 'blue'} />
          <Button title="Fint" disabled={this.state.btnDisabled} onPress={() => this.changeTheme('fint')} color={this.state.selectedTheme === 'fint' ? this.activatedColor : 'blue'} />
          <Button title="Ocean" disabled={this.state.btnDisabled} onPress={() => this.changeTheme('ocean')} color={this.state.selectedTheme === 'ocean' ? this.activatedColor : 'blue'} />
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
    paddingBottom: 10
  },
  chartContainer: {
    height: 400,
    borderColor: '#000',
    borderWidth: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    marginTop: 10
  },
  instruction: {
    fontSize: 15
  }
});