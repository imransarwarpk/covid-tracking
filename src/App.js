import React from 'react';

import { Cards,Chart,CountryPicker } from './components'

import styles from './App.module.css'

import { fatchData } from './api'

import CoronaImage from './images/covid_image.png'

class App extends React.Component{

    state = {
        data : {},
        country:'',
    }

    async componentDidMount(){

        const APIdata = await fatchData();
        
        this.setState( {data : APIdata });

    }

    handleCountryChange = async (country) => {
        const fetchedData = await fatchData(country);

        this.setState( {data : fetchedData,country:country });
    };

    render(){

        const { data , country } = this.state;
        //console.log({data});
        return(
            
            <div className={styles.container}>

                <img className={styles.image} src={CoronaImage} slt="Covid image" />

                <CountryPicker handleCountryChange ={this.handleCountryChange}/>

                <Cards data={data}/>
                
                <Chart data={data} country={country}/>

                <p>Developed By IMRAN SARWAR</p>
            </div>
        )

    }
}

export default App;