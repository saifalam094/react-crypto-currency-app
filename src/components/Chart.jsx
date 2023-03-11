import React from 'react'
import {Line} from "react-chartjs-2"
import {Chart as chartjs,CategoryScale,LinearScale,PointElement,LineElement
,Title,Tooltip,Legend} from "chart.js"
chartjs.register(CategoryScale,LinearScale,PointElement,LineElement
    ,Title,Tooltip,Legend);
const Chart = ({arr=[],currency,days}) => {
    const prices=[];
    const date =[];
 
  for(let i=0;i<arr.length;i++){
    if(days==="24h")date.push(new Date(arr[i][0].toLocaleDateString()))
   else date.push(new Date(arr[i][0]).toLocaleDateString());
    prices.push(arr[i][1]);
  }
  const data={
    labels:Date,
    datasets:[{
        label: `price in ${currency}`,
        data:prices,borderColor:"white",
        backgroundColor:"rgba(255,99,132,0.5)"
    }]
};
  console.log(data);
  

    
  return (
   <Line options={{
    responsive:true,
    color:"white"
   }}
    data={data}
   /> 
  )
}

export default Chart
