import React, { useState ,useEffect} from 'react'
import axios from "axios"

import { Container,Box, HStack, Radio,RadioGroup, VStack ,Text,Image, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Badge, Button} from '@chakra-ui/react';
import Loader from './Loader';
import { server } from '..';
import {useParams} from "react-router-dom"
import ErrorComponent from './ErrorComponent';
import Chart from './Chart';

const CoinsDetails = () => {
  const [coin,setCoin]=useState({});
  const [loading,setLoading]=useState(true);
  const [error,setError] =useState(false);
  const[currency,setCurrency]=useState("inr");
  const[days,setDays]=useState("24h");
  const[chartArray,setChartArray]=useState([])

  const param=useParams();
  const currencySymbol = currency==="inr"? "₹": currency==="euro"? "€" :"$"
  const btns =["24h","7d","14d", "30d","60d","200d","1y","max"];
  const switchChartStats=(key)=>{
   switch (key){
    case "24h" :
      setDays("24h");
      setLoading(false)
      break;
      case "7d" :
        setDays("7d");
        setLoading(false)
        break;
        case "14d" :
          setDays("14d");
          setLoading(false)
          break;
          case "30d" :
            setDays("30d");
            setLoading(false)
            break;
            case "60d" :
              setDays("60d");
              setLoading(false)
              break;
              case "200d" :
                setDays("200d");
                setLoading(false)
                break;
                case "365d" :
                  setDays("365d");
                  setLoading(false)
                  break;
                  case "max" :
                    setDays("max");
                    setLoading(false)
                    break;
   default:
    setDays("24h");
    setLoading(false)
    break;
   }
  }
  useEffect(()=>{
    const fetchCoin= async()=>{
       try {
        const {data}=await axios.get(`${server}/coins/${param.id}`);
        const {data:chartData}= await axios.get(

          `${server}/coins/${param.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        
     console.log(chartData)
        setCoin(data);
        setChartArray(chartData.prices);

 
        setLoading(false)
       } catch (error) {
           setError(true)
           setLoading(false);
       }
    }
    fetchCoin();
   },[param.id,currency,days]);
   if(error) return <ErrorComponent message={"Error while fetching coin"}/>
  return (
    <Container maxW={"container.xl"}>
    {
      loading?<Loader/>:(<>
     <Box width={"full"} borderWidth={9}>
<Chart   arr={chartArray} currency={currencySymbol}/>
     </Box>
     <HStack p={"4"} overflowX={"auto"}>
     {btns.map((i)=>(
      <Button key={i} onClick={()=>switchChartStats(i)}>{i}</Button>
     ))}

     </HStack>
  


     <RadioGroup value= {currency} onChange={setCurrency} p={"8"}>
  <HStack spacing={"4"}>
    <Radio value={"inr"}>₹</Radio>
    <Radio value={"eur"}>€</Radio>
    <Radio value={"usd"}>$</Radio>

  </HStack>
</RadioGroup>
<VStack spacing={"4"} p={"16"} alignItems={"flex-start"}>
<Text fontSize={"small"} alignSelf={"center"} opacity={0.7}>
 Last updated on {Date(coin.market_data.last_updated).split("G")[0]}
</Text>
<Image src={coin.image.large} w={"16"} h={"16"} objectFit={"contain"}/>
<Stat>
  <StatLabel>
    {coin.name}
  </StatLabel>
  <StatNumber>
 {currencySymbol}{coin.market_data.current_price[currency]}
  </StatNumber>
  <StatHelpText>
    <StatArrow type= {coin.market_data.price_change_percentage_7d >0?"increase":"decrease"}/>
   {coin.market_data.price_change_percentage_7d}%
    
  </StatHelpText>
</Stat>
<Badge fontSize={"2xl"} bgColor={"blackAlpha.900"} color={"white"}>
 {`#${coin.market_cap_rank}`}
</Badge>
<CustomBar high={`${currencySymbol} ${coin.market_data.high_24h[currency]}` } low={`${currencySymbol} ${coin.market_data.low_24h[currency]}` } />
<Box w={"full"} p={"4"}>
 <Item title={"Max Supply"} value= {coin.market_data.max_supply}/>
 <Item title={"Circulating supply"} value= {coin.market_data.circulating_supply}/>
 <Item  
 title={"Market cap"}
 value={ `${currencySymbol}${coin.market_data.market_cap[currency]}`}


 />
 <Item
title={"All time low"}
value={ `${currencySymbol}${coin.market_data.atl[currency]}`}


 />
 <Item
title={"All time high"}
value={ `${currencySymbol}${coin.market_data.ath[currency]}`}


 />

</Box>
</VStack>
      </>)
    }

    </Container>
  )
}

const Item = ({title,value})=>(
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
      {title}
    </Text>
    <Text>
      {value}
    </Text>
  </HStack>
)






const CustomBar =({high,low})=>(
 <VStack w={"full"}>
 <progress value={"50"} colorScheme={"teal"}  w={"full"} />
  <HStack justifyContent={"space-between"} w={"full"}>
  <Badge children={low} colorScheme={"red"}/>
  <Text fontSize={"sm"}>24H range</Text>
  <Badge children={high} colorScheme={"green"}/>


  </HStack>
 </VStack>
)


export default CoinsDetails
