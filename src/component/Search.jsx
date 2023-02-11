import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import FormStyle from '../style/Form';
import {useNavigate} from "react-router-dom"


export default function Search() {
    const [inputs,setInput] = useState('')
    const navigate = useNavigate();
    const submitHandler = (e)=>{
        e.preventDefault();
        navigate('/searched/'+inputs)
        

    };
  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch/>
        <input type='text' value={inputs} onChange={(e)=>setInput(e.target.value)}/>
        </div>
        
    </FormStyle>
  )
}
