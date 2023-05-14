import { Box, Button, Container, Image, Input, SimpleGrid, Text } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'


const Search = () => {

  const [breedName, setBreedName] = useState("");

  const [searchQuery, setsearchQuery] = useState([]);

  const searchInputQuery = (event) => {

    event.preventDefault()

    fetch(`https://dog.ceo/api/breed/${breedName}/images`)
      .then((response) => response.json())
      .then((user) => {
        setsearchQuery(user.message);
      })
      .catch((error) => {
        console.error(error);
      })
  };

  return (
    <Box>
      <Text>Search Here</Text>
      
    <form onSubmit={searchInputQuery}>
      <label>
        <Input type="text"
         value={breedName}
         placeholder='Search here...'
          onChange={(event) => setBreedName(event.target.value)} 
           padding={"10px 10px"}
           borderRadius={"10px"}
          />
      </label>
      <Button type="submit" background={"blue"} color={"white"} border={"none"} borderRadius={"10px"} padding={"10px 10px"}>Search</Button>
    </form>

    <Box>
    <SimpleGrid  gridGap='4rem' p='3rem' columns={[1,2,4,4]}>
      {searchQuery.map((item) => (
        <Image src={item} key={item} alt={breedName}   width={"300px"} height={"200px"} />
      ))}
      </SimpleGrid>
    </Box>

    
  </Box>
  )
}

export default Search