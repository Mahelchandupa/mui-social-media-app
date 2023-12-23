import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

const Feed = () => {
  return (
    <Box flex={4} p={2}>
       <Post image="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
       <Post image="https://images.pexels.com/photos/612891/pexels-photo-612891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
       <Post image="https://images.pexels.com/photos/265705/pexels-photo-265705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
       <Post image="https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
       <Post image="https://images.pexels.com/photos/757185/pexels-photo-757185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    </Box>
  )
}

export default Feed