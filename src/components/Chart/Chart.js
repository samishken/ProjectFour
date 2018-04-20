import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import './Chart.css';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData,
      pieChart:props.pieChart,
      lineChart:props.lineChart
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition:'top',
    location:'Region'
  }

  componentWillMount(){
    this.getChartData();
  }


  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{ 
        labels: [
            'United Arab Emirates', 'Egypt', 'Saudi Arabia', 'Syria', 'Bahrain', 'Djibouti', 'Algeria', 'Iran', 'Iraq', 
            'Israel', 'Jordan', 'Kuwait', 'Lebanon', 'Libya'
        ],
        datasets:[
          {
            label:'gdp_pc',
            data:[
              49600,
              6200,
              24200,
              4800,
              40300,
              2800,
              7300,
              10600,
              3800,
              29800,
              5400,
              48900,
              14400,
              14000    
            ],
            backgroundColor:[
              'rgba(204, 43, 28)',
              'rgba(204, 63, 165)',
              'rgba(102, 34, 28)',
              'rgba(161, 236, 83)',
              'rgba(82, 102, 28)',
              'rgba(201, 187, 63)',
              'rgba(49, 126, 255)',
              'rgba(142, 236, 119)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ],
            coordinates: [
              'lat': 23.4241, 'lng': 53.8478,
              'lat': 26.8206, 'lng': 30.8025,
              'lat': 23.8859, 'lng': 45.0792,
              'lat': 34.8021, 'lng': 38.9968,
              'lat': 26.0667, 'lng': 50.5577,
              'lat': 11.8251, 'lng': 42.5903,
              'lat': 28.0339, 'lng': 1.6596,
              'lat': 32.4279, 'lng': 53.6880,
              'lat': 33.2232, 'lng': 43.6793,
              'lat': 31.0461, 'lng': 34.8516,
              'lat': 30.5852, 'lng': 36.2384,
              'lat': 29.3117, 'lng': 47.4818,
              'lat': 33.8547, 'lng': 35.8623,
              'lat': 26.3351, 'lng': 17.2283
            ]
          }
        ]
      },
      pieChart: {
        labels: [
          'United Arab Emirates', 'Egypt', 'Saudi Arabia', 'Bahrain', 'Djibouti', 'Algeria', 'Iran', 'Iraq', 
          'Israel', 'Jordan', 'Kuwait', 'Lebanon', 'Libya'
      ],
      datasets:[
        {
          label:'gdp_pc',
          data:[
            8985705,
            8106800,
            7452533,
            281914,
            159998,
            1637370,
            3372000,
            146400,
            11902600,
            1538873,
            291958,
            2610181,
            492556    
          ],
          backgroundColor:[
            'rgba(204, 43, 28)',
            'rgba(204, 63, 165)',
            'rgba(102, 34, 28)',
            'rgba(161, 236, 83)',
            'rgba(82, 102, 28)',
            'rgba(201, 187, 63)',
            'rgba(49, 126, 255)',
            'rgba(142, 236, 119)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      },
      lineChart: {
        labels: [
          'United Arab Emirates', 'Egypt', 'Saudi Arabia', 'Syria', 'Bahrain', 'Djibouti', 'Algeria', 'Iran', 'Iraq', 
          'Israel', 'Jordan', 'Kuwait', 'Lebanon', 'Libya'
      ],
      datasets:[
        {
          label:'gdp_pc',
          data:[
            49600,
            6200,
            24200,
            4800,
            40300,
            2800,
            7300,
            10600,
            3800,
            29800,
            5400,
            48900,
            14400,
            14000    
          ],
          backgroundColor:[
            'rgba(204, 43, 28)',
            'rgba(204, 63, 165)',
            'rgba(102, 34, 28)',
            'rgba(161, 236, 83)',
            'rgba(82, 102, 28)',
            'rgba(201, 187, 63)',
            'rgba(49, 126, 255)',
            'rgba(142, 236, 119)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
      
    })
  }




  selectCountry = (country) => {
    console.log(country)
    this.setState({
      selectedCountry: country
    })
  }

  render(){
    return (
      <div className="chart">
        <Pie
          data={this.state.pieChart}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Consumer Price Index of '+ this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        /> 

        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'GDP Per Capital '+ this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      
      <Line
          data={this.state.lineChart}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Consumer Price Index '+ this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        /> 
        
      </div>
    )
  }
}

export default Chart;