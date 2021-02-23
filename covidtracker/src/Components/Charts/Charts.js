import React,{useEffect,useState} from "react";
import {Line,Bar} from "react-charts-2";
import {fetchDailyData} from "../../Api"

export const Chart=()=>{
    const [DailyData,setDailyData]= useState([])

    useEffect(() => {
        const fetchApi= async()=>{
            setDailyData(await fetchDailyData());
        }
        console.log(DailyData)
        fetchApi();
    }, [])

const LineChart=(
    DailyData 
    ? (

        <Line
            data={{
                labels:DailyData.map(({date})=>date),
                datasets:[
                    {
                        data:DailyData.map(({confirmed})=>confirmed),
                        label:"Infected",
                        borderColor:"#3333ff",
                        fill:true
                    },
                    {
                        data:DailyData.map(({deaths})=>deaths),
                        label:"Deaths",
                        borderColor:"red",
                        fill:true
                    }
                ]
            }}
        />
    ):console.log("Data is not fecthed yet")
)
return(
   <div>
   {LineChart}
   </div>
)

}