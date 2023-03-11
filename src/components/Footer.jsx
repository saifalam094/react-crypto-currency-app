import React from 'react'
import {Avatar, Box, Stack, VStack,Text} from "@chakra-ui/react"
import profile from "../assets/ava.jpg"
const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"48"}
    
    px={"16"}
    py={["16","8"]}
    >
  <Stack direction={["column","row"]} alignItems={"center"}>

   <VStack w={"full"} alignItems={["center","flex-start"]}>
    <Text fontWeight={"bold"}>
   
      About us
    </Text>
    <Text fontSize={"sm"} letterSpacing={"widest" } textAlign={["center","left"]}>We are the best crypto trading app in India,We provide our guidance at a very cheap price. </Text>
   </VStack>
   <VStack>
    <Avatar boxSize={"28"} mt={["4","0"]} src={profile}/>
    <Text>Our foundation</Text>
   </VStack>
  </Stack>

    </Box>
  )
}

export default Footer
