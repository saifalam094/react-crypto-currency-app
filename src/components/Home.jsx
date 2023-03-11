import React from 'react'
import {Box, Image,Text} from "@chakra-ui/react"
import {motion} from  "framer-motion"
import btc from  "../assets/bit.jpg"
const Home = () => {
  return (
   <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
   <motion.div style={{
    height:"80vh",


   }}
   animate={{
    translateY:"20px"
   }}
   transition={{
    duration:2,
    repeat:Infinity,
    repeatType:"reverse"
   }}>
   <Image w={"full"} h={"full"} objectFit={"contain"} src={btc} bgColor={"blackAlpha.900"}/>
   </motion.div>
      
       <Text fontSize={"6xl"} textAlign={"center"} fontWeight={"thin"}
       color={"whiteAlpha.700"}
       
       >Xcrypto</Text>
   </Box>
  )
}

export default Home
