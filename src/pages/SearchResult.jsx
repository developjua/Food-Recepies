import React, { useEffect, useState } from 'react'
import {useParams,Link} from "react-router-dom"
import Grid from "../style/Grid"
import Imcard from "../style/Imcard"
export default function SearchResult() {
  const [searched,setSearched] = useState([])
  const params = useParams()
  const getSearched = async(name)=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
     const recipes = await data.json();
     setSearched(recipes.results);
     
}
 useEffect(()=>{
  getSearched(params.search)
 },[params.search])
  return (
    <Grid>
      {
        searched.map((item)=>{
          return(
            <Link to={'/recipe/'+item.id}>
            <Imcard key={item.id}>
             <img src={item.image} alt=""/>
             <h4>{item.title}</h4> 
            </Imcard>
            </Link>

          )
        })
      }
    </Grid>
  )
}
