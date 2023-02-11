import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import DetailWrapper from '../style/DetailWrapper';
import Button from '../style/Button';
import styled from 'styled-components';

export default function Recipe() {
    const [details,setDetails] = useState({});
    const [activeTab,setActiveTab] = useState('instructions')
    let params = useParams();

    const getDetails = async()=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
         const detailsData = await data.json();
         setDetails(detailsData);
         
    }
    
    useEffect(()=>{
        getDetails()
    },[params.name])



  return (
    <DetailWrapper>
        <div>
          <h2>{details.title}</h2>
         <img src={details.image} alt=""/>
        </div>
        <Info> 
            
            <Button className={activeTab === 'instructions'? 'active' : ' '} onClick={()=> setActiveTab('instructions')}>Instruction</Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ' '}  onClick={()=> setActiveTab('ingredients')}>Ingredients</Button>
            {activeTab === 'instructions' && (
            <div>
                <h5 dangerouslySetInnerHTML={{__html:details.summary}}></h5>
                <h5 dangerouslySetInnerHTML={{__html:details.instructions}}></h5>
            </div>)}
            {activeTab === 'ingredients' && (
            <ul>
                {details.extendedIngredients.map((ingredient)=>(
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
            )}
        
        </Info>
   </DetailWrapper>
  )
}

const Info = styled.div`
margin-left:5rem;
`;
