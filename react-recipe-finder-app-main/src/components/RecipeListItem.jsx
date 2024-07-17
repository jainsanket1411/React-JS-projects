import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const RecipeListItem = ({recipe}) => {
  return (
    <Card>
        <img src={recipe.image_url} alt="thumbnail" height={170} />
        <Card.Content>
            <Card.Header content={recipe.title} />
            <Card.Description content={recipe.publisher} />
        </Card.Content>
        <Card.Content>
            <Button as={Link} to={`/recipes/${recipe.recipe_id}`} content='Details' color='blue' size='tiny' />
            <Button as={"a"} href={recipe.source_url} target="_blank" content='Recipe Url' color='green' size='tiny' />
        </Card.Content>
    </Card>
  )
}

export default RecipeListItem