import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2'
import './Linechart.css';

class Linechart extends Component {
  constructor(props){
    super(props);
    this.state = {
      lineChart: props.lineChart
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition:'top',
    location:'Region'
  }

  componentWillMount(){
    this.getLineChart();
  }

  getLineChart(){
    // Ajax calls here
    this.setState({
      lineChart:{
        labels: [
            'United Arab Emirates', 'Egypt', 'Saudi Arabia', 'Syria', 'Bahrain', 'Djibouti', 'Algeria', 'Iran', 'Iraq', 
            'Israel', 'Jordan', 'Kuwait', 'Lebanon', 'Libya'
        ],
        datasets:[
          {
            label:'cpi',
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
    });
  }

  selectCountry = (country) => {
    console.log(country)
    this.setState({
      selectedCountry: country
    })
  }

  render(){
    return (
      <div className="line-chart">
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

export default Linechart;
 