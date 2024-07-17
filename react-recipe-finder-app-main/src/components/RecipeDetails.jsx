import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getRecipe } from '../services/api'
import {useParams, Link } from 'react-router-dom'
import { Button, Grid, Header, Image, Segment } from 'semantic-ui-react'

const RecipeDetails = () => {

    const [recipe, setRecipe] = useState({})

    const { recipeId } = useParams()

    useEffect(()=>{
        const getData = async()=>{
            let response = await getRecipe(recipeId)
            setRecipe(response.recipe)
        }
        getData()
        // eslint-disable-next-line
    },[])

  return (
    Object.keys(recipe).length > 0 ?
    <Grid container stackable columns={2} className='detailsPageContant' >
        <Grid.Column>
            <Button as={Link} to='/recipes' content='Back to recipe list' color='yellow' style={{marginBottom: 40}}  />
            <Image src={recipe.image_url} />
        </Grid.Column>
        <Grid.Column>
            <Header size='medium' >
                {recipe.title}
            </Header>
            <p>Provided by: {recipe.publisher}</p>
            <Button as={"a"} href={recipe.publisher_url} target='_blank' content='Publisher Web Page' color='blue'  />
            <Button as={"a"} href={recipe.source_url} target='_blank' content='Recipe Url' color='green' />
            <Header size='large' content='Ingredients' />
            <Segment.Group>
                {
                   recipe && recipe.ingredients.map(data =>(
                    <Segment>
                        <h5>{data}</h5>
                    </Segment>
                   ))
                }
            </Segment.Group>
        </Grid.Column>
    </Grid> : null
  )
}

export default RecipeDetails