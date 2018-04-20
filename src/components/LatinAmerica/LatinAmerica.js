import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import './LatinAmerica.css';

class LatinAmerica extends Component{
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
            'Brazil', 'Argentian', 'Peru', 'Chile', 'Uruguay', 'Bolivia' 
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
              2800   
            ],
            backgroundColor:[
              'rgba(204, 43, 28)',
              'rgba(204, 63, 165)',
              'rgba(102, 34, 28)',
              'rgba(161, 236, 83)',
              'rgba(82, 102, 28)',
              'rgba(201, 187, 63)'
              
            ],
            coordinates: [
              'lat': 23.4241, 'lng': 53.8478,
              'lat': 26.8206, 'lng': 30.8025,
              'lat': 23.8859, 'lng': 45.0792,
              'lat': 34.8021, 'lng': 38.9968,
              'lat': 26.0667, 'lng': 50.5577,
              'lat': 11.8251, 'lng': 42.5903
            ]
          }
        ]
      },
      pieChart: {
        labels: [
            'Brazil', 'Argentian', 'Peru', 'Chile', 'Uruguay', 'Bolivia' 
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
            1637370
          ],
          backgroundColor:[
            'rgba(204, 43, 28)',
            'rgba(204, 63, 165)',
            'rgba(102, 34, 28)',
            'rgba(161, 236, 83)',
            'rgba(82, 102, 28)',
            'rgba(201, 187, 63)'
            ]
          }
        ]
      },
      lineChart: {
        labels: [
            'Brazil', 'Argentian', 'Peru', 'Chile', 'Uruguay', 'Bolivia' 
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
            2800
          ],
          backgroundColor:[
            'rgba(204, 43, 28)',
            'rgba(204, 63, 165)',
            'rgba(102, 34, 28)',
            'rgba(161, 236, 83)',
            'rgba(82, 102, 28)',
            'rgba(201, 187, 63)'
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
              text:'Producer Price Index (PPI) '+ this.props.location,
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

export default LatinAmerica;