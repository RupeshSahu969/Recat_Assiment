import React from 'react'
import { Heading, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./nav.css"
const Navbar = () => {

  
  return (
    <Box id='navbar-container'>
      <Box><Link to={"/"}>Home</Link></Box>
      <Box> <Link to={"/search"}>Search</Link></Box>  
       
      </Box>
    
  )
}

export default Navbar