import React, { useState } from 'react'
import { Form, Grid, Input } from 'semantic-ui-react'

const Search = ({ setSearchedQuery }) => {

  const [value, setValue] = useState("")

  const onFormSubmit = () => {
    setSearchedQuery(value)
  }

  return (
    <Grid columns={2} textAlign='center' className='search-box' >
      <Grid.Column>
        <h2 className='search-heading' >Search Recipes With <span style={{ color: '#2185D0' }} >Our Recipe.</span></h2>
        <h4>Enter Recipes Seprated by Comma.</h4>
        <Form onSubmit={() => onFormSubmit()} >
          <Input placeholder="tomato, potato, pizza onion etc." action={{ icon: 'search', color: 'blue' }} onChange={(e) => setValue(e.target.value)} value={value} />
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default Search