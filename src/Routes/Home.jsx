import { Box, SimpleGrid, Text } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import Navbar from '../Components/Navbar'

const Home = () => {

    const [data,setData] = useState([])

    const getBreedDatas = ()=>{
    
        fetch(`https://dog.ceo/api/breeds/list/all`)
        .then((res)=>res.json())
        .then((res)=>{
          
          let arrbeeds=[];
          for(const breed in res.message){
            arrbeeds.push(breed);
          }

          setData(arrbeeds);
          
        })
        .catch((err)=>console.log(err))
      }

      useEffect(() =>{

        getBreedDatas()

      },[])
  

  return (
  <div>
      <Text>Dog Breeds</Text>
      <Box>
      <SimpleGrid  gridGap='4rem' p='3rem' columns={[1,2,4,4]}>

        {data.map((user) => (
          <Link to={`/puppy/${user}`} key={user}>
            <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"} fontSize={"20px"}>{user}</Box>
          </Link>
        ))}
        
          </SimpleGrid>
      </Box>
      </div>
  )
}

export default Home