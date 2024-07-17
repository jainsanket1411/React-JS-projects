import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import RecipeList from '../components/RecipeList'
import Search from '../components/Search'
import { getRecipes } from '../services/api'

const Recipes = () => {

  const [searchedQuery, setSearchedQuery] = useState('pizza')
  const [recipes, setRecipes] = useState([])

    const getSearchedResult = async()=>{
     let result = await getRecipes(searchedQuery);
     console.log(searchedQuery);
     if (result && result.recipes) {
      setRecipes(result.recipes)
     }
    }

    useEffect(()=>{
      getSearchedResult()
      // eslint-disable-next-line 
    },[searchedQuery])

  return (
    <>
    <Search  setSearchedQuery={setSearchedQuery} />
    <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
    </>
  )
}

export default Recipes