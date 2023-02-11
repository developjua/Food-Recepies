import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import '@splidejs/react-splide/css';
import Card from "../style/Card"
import Gradient from "../style/Gradient"
import Wrapper from "../style/Wrapper"
import {Link} from 'react-router-dom'

export default function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <div>
    <Wrapper>
      <h3>Popular Picks</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {popular.map((recp) => {
          return (
            <SplideSlide key={recp.id}>
              <Card>
                <Link to={'/recipe/'+recp.id}>
                <p>{recp.title}</p>
                <img src={recp.image} alt={recp.title} />
                <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
       
      </Splide>
    </Wrapper>
    </div>
  );
}


