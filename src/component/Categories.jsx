import {FaPizzaSlice,FaHamburger } from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";

import List from "../style/List";
import SLink from "../style/SLink";

export default function Categories() {
  return (
    <List>
    <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
    </SLink>
    <SLink to={'/cuisine/American'}>
        <FaHamburger/>
        <h4>American</h4>
    </SLink>
    <SLink to={'/cuisine/Chinese'}>
        <GiNoodles/>
        <h4>China</h4>
    </SLink>
    <SLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
    </SLink>

    </List>
  )
}
