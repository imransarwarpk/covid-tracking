import React,{useState,useEffect} from 'react';

import { fetchDailyData } from '../../api';

import { Line , Bar } from 'react-chartjs-2'

import styles from './Chart.module.css';

const Chart = ({data : { confirmed, recovered , deaths},country}) => {
    
    const [dailyData,setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async ()=> {
          console.log("Fetch API Function Called.");
          setDailyData(await fetchDailyData());
        }

        console.log(dailyData);

        fetchAPI();

    },[]);

    const options = {
        scales: {
          yAxes: [{
            ticks: {
              callback(value) {
                return Number(value).toLocaleString('en')
              }
            }
          }]
        }
      }

    const lineChart = (
        dailyData.length 
        ? (
            <Line
            options={options}
            data={{
                labels:dailyData.map(({ date }) => date),
                
                datasets:[{ 
                    data : dailyData.map(({ confirmed }) => confirmed ),
                    label:'Infected',
                    //borderColer: '#3333ff',
                    borderColor: '#3333ff',
                    fill:true,
                },
                {
                    data : dailyData.map(({ deaths }) => deaths ),
                    label:'Deaths',
                    borderColer:'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true,
                }
            
            ],
            }}
            />
        ) : null
    );


    const barChar = (
        confirmed
        ? 
        (
            <Bar 
            
            data={{
                labels:['Infected', 'Recovered','Deaths'],
                datasets:[{
                    label: 'People',
                    backgroundColor: ['rgba(0, 0, 255,0.5)','rgba(0, 255, 0,0.5)','rgba(255, 0, 0,0.5)'],
                    data:[confirmed.value, recovered.value , deaths.value]
                }]
            }} 
            
            options={{
                legend: { display :false},
                title: {display:true, text:'Current state in '+country},
                scales: {
                    yAxes: [{
                      ticks: {
                        callback(value) {
                          return Number(value).toLocaleString('en')
                        }
                      }
                    }]
                  }
            }}/>
        ) : null
    )
    return (
        <div className={styles.container}>

            {country ? barChar : lineChart}
            
        </div>
    )

}

export default Chart;