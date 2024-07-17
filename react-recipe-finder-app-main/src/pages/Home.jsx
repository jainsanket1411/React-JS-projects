import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import Header from '../components/Header'

const Home = () => {
  return (
    <Header title='Hello Recipes' bgClass='bg-image'>
        <Button content='Search Recipes' color='primary' as={Link} size='big' to='/recipes' />
    </Header>
  )
}

export default Home