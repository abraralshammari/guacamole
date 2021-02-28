import Reacr from "react";
import Images from "../Images";
import Cardsimg from "./Cardsimg";

const CardsList = () => {
    return (Images.map((val) => (
        <Cardsimg img={val} key={val.id}/> )) 

    )
}

export default CardsList;
