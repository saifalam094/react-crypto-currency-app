import React from 'react'
import {VStack,Image,Heading,Text} from "@chakra-ui/react"
import {Link} from "react-router-dom"
const CoinsCard = ({id,name,img,symbol,price ,currencySymbol="₹"})=> (
    <Link to={`/coin/${id}` }>
  
      <VStack w={"52"} p={"8"} shadow={"lg"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"}
      css={{
        "&:hover":{
          transform:"scale(1.1)",
          "backgroundColor":"white",
          "color":"black"
        }
      }}
      
      
      >
        <Image src={img} alt= {"Exchange"}  width={"10"} height={"10"} objectFit={"contain"}/>
        <Heading size={"md"} noOfLines={1}>
          {symbol}
        </Heading>
        <Text noOfLines={1}>
          {name}
        </Text>
        <Text noOfLines={1}>
          {price ? `${currencySymbol}${price}`:"NA"}
        </Text>
      </VStack>
    </Link>
  )


export default CoinsCard
