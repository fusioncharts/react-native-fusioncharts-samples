import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import FusionCharts from 'react-native-fusioncharts';

export default class DrillDown extends Component {
  constructor(props) {
    super(props);
    this.apiCaller = null;
    this.state = {
      type: 'column2d',
      width: '100%',
      height: '100%',
      dataFormat: 'json',
      dataSource: {
        chart: {
          caption: 'Sales of top 3 juice flavors last year',
          subcaption: 'Click on a column to see details',
          xaxisname: 'Flavor',
          yaxisname: 'Amount (In USD)',
          numberprefix: '$',
          theme: 'fusion'
        },
        data: [
          {
            label: 'Apple',
            value: '810000',
            link: 'newchart-xml-apple'
          },
          {
            label: 'Cranberry',
            value: '620000',
            link: 'newchart-xml-cranberry'
          },
          {
            label: 'Grape',
            value: '350000',
            link: 'newchart-xml-grape'
          }
        ],
        linkeddata: [
          {
            id: 'apple',
            linkedchart: {
              chart: {
                caption: 'Apple Juice - Quarterly Sales',
                subcaption: 'Last year',
                numberprefix: '$',
                theme: 'fusion',
                rotateValues: '0',
                plottooltext: '$label, $dataValue,  $percentValue'
              },
              data: [
                {
                  label: 'Q1',
                  value: '157000',
                  displayValue: 'Q1, $157K'
                },
                {
                  label: 'Q2',
                  value: '172000',
                  displayValue: 'Q2, $172K'
                },
                {
                  label: 'Q3',
                  value: '206000',
                  displayValue: 'Q3, $206K'
                },
                {
                  label: 'Q4',
                  value: '275000',
                  displayValue: 'Q4, $275K'
                }
              ]
            }
          },
          {
            id: 'cranberry',
            linkedchart: {
              chart: {
                caption: 'Cranberry Juice - Quarterly Sales',
                subcaption: 'Last year',
                numberprefix: '$',
                theme: 'fusion',
                plottooltext: '$label, $dataValue,  $percentValue'
              },
              data: [
                {
                  label: 'Q1',
                  value: '102000',
                  displayValue: 'Q1, $102K'
                },
                {
                  label: 'Q2',
                  value: '142000',
                  displayValue: 'Q2, $142K'
                },
                {
                  label: 'Q3',
                  value: '187000',
                  displayValue: 'Q3, $187K'
                },
                {
                  label: 'Q4',
                  value: '189000',
                  displayValue: 'Q4, $189K'
                }
              ]
            }
          },
          {
            id: 'grape',
            linkedchart: {
              chart: {
                caption: 'Grape Juice - Quarterly Sales',
                subcaption: 'Last year',
                numberprefix: '$',
                theme: 'fusion',
                rotateValues: '0',
                plottooltext: '$label, $dataValue,  $percentValue'
              },
              data: [
                {
                  label: 'Q1',
                  value: '45000',
                  displayValue: 'Q1, $45K'
                },
                {
                  label: 'Q2',
                  value: '72000',
                  displayValue: 'Q2, $72K'
                },
                {
                  label: 'Q3',
                  value: '95000',
                  displayValue: 'Q3, $95K'
                },
                {
                  label: 'Q4',
                  value: '108000',
                  displayValue: 'Q4, $108K'
                }
              ]
            }
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
              this.apiCaller(`window.chartObj.configureLink({
                type: 'pie2d',
                overlayButton: {
                  message: 'Back',
                  fontColor: '880000',
                  bgColor: 'FFEEEE',
                  borderColor: '660000',
                }}, 0);`);
            }}
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
  }
});
