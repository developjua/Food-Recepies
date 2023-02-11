import Popular from "../component/Popular";
import Veggie from "../component/Veggie";
import {motion} from "framer-motion"

import React from 'react'

export default function Home() {
  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}>
    
    <Popular />
    <Veggie/> 

    </motion.div>
  )
}
