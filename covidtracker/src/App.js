import React from  'react';
import './App.css';
import TopBar from './Components/TopBar'
import {Chart} from './Components/Charts/Charts'

import {fetchData} from "./Api";

class App extends React.Component{
  state={
    data:{},
  }
  async componentDidMount(){

    const fetchApi=await fetchData();
    this.setState({data:fetchApi});

  }
  
  render(){
    return (
  <>
    <TopBar></TopBar>
     <Chart></Chart>
     </>
    );
   
    
  }
}

export default App;
