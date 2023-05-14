import { Box ,Image, SimpleGrid, Text} from '@chakra-ui/react';

import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import Navbar from '../Components/Navbar';

const Puppy = () => {

    const [data,setData] = useState([])

    const { breed } = useParams();

  const [images, setImages] = useState([]);

    const getImageData = ()=>{
    
      fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((response) => response.json())
      .then((data) => {
        setImages(data.message);
      })
      .catch((error) => {
        console.log(error);
      });


      }

      useEffect(() =>{

        getImageData()

      },[breed])

  return (
    <>
      <Box >
      <Box>
      <SimpleGrid  gridGap='4rem' p='3rem' columns={[1,2,4,4]}>
        {images.map((el) => (
          <Image src={el} key={el} alt={breed}  width={"300px"} height={"200px"} />
        ))}
        </SimpleGrid>
      </Box>
    </Box>
    </>
  )
}

export default Puppy
