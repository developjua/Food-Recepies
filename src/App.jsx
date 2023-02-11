import Categories from "./component/Categories";
import Search from "./component/Search";
import Pages from "./pages/Pages";

import { Logo, Nav } from "./style/Nav";
import { GiKnifeFork } from "react-icons/gi";

export default function App(){
    return(
        <div>
            <Nav>
                <GiKnifeFork/>
                <Logo to={'/'}>FoodRecipes</Logo>
            </Nav>
            <Search/> 
            <Categories/>
           <Pages/>
           
        </div>
    )
}