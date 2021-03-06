import React, { Component } from 'react';
import * as echarts from 'echarts';
import './statWeather.css'

export default function() {
    class StatWeather extends Component {
        constructor (props) {
            super(props);
            this.state = {
                active: 1
            }
        }
        componentDidMount() {
            this.setOptions(this.state.active);

        }
        setOptions(id) {
                this.setState({active: id})
                let line = [];
                let temp = [];
                if (id === 1) {
                    if (this.props.city && this.props.city.data) {
                        this.props.city.data.map((el) => line[line.length] = el.dt_txt)
                        this.props.city.data.map((el) => temp[temp.length] = el.main.temp)
                    }

                } else {
                    if (this.props.city && this.props.city.cityes) {
                        this.props.city.cityes.map((el) => line[line.length] = el.name)
                        this.props.city.cityes.map((el) => temp[temp.length] = el.temp)
                    }
                }
                const myChart = echarts.init(document.getElementById('main'));
                const option = {
                    xAxis: {
                        type: 'category',
                        data: line,
                        scale: true
                    },
                    yAxis: {
                        type: 'value',
                        data: temp,
                        scale: true,
                    },
                    grid: [{
                        top: '15px'
                    }],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                show: true,
                            }
                        }
                    },
                    series: [{
                        data: temp,
                        type: 'line',
                        lineStyle: {
                            color: '#009688',
                        },
                    }]
                };
         myChart.setOption(option);

        }
      render() {
        return(
            <div className="row margin-top-25">
                <div className="block_charts">
                    <div onClick={() => this.setOptions(1)} key = "1" className={this.state.active === 1 ? 'active link' : 'link'} >График 1</div>
                    <div onClick={() => this.setOptions(2)} key="2" className={this.state.active === 2 ? 'active link' : 'link'} >График 2</div>
                    <div className="chart">
                        <h6>{this.state.active === 1
                            ? this.props.city.name && `Средняя температура по городу ${this.props.city.name}`
                            : 'Средняя температура по сохранённым городам'}
                        </h6>
                        <div id="main" style={{width: '100%', height: '450px'}} />
                    </div>
                </div>
            </div>
        )
      }
    }
    return StatWeather
}
