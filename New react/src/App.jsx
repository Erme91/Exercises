import React, { useState } from "react";
import Cards from "./components/Cards";
import "./components/Cards.css";

function App() {

  const [cardData, setCardData] = useState([
    {
      img: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Paesaggi",
      paragraph: "Luoghi dove trascorrere bei momenti!"
    },
    {
      img: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "",
      paragraph: ""
    },
    {
      img: "https://images.pexels.com/photos/14092973/pexels-photo-14092973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "",
      paragraph: ""
    },
    {
      img: "https://images.pexels.com/photos/17217435/pexels-photo-17217435/free-photo-of-acqua-inverno-montagna-ghiaccio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "",
      paragraph: ""
    },
    {
      img: "https://images.pexels.com/photos/96387/pexels-photo-96387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "",
      paragraph: ""
    },
    {
      img: "https://images.pexels.com/photos/8905097/pexels-photo-8905097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "",
      paragraph: ""
    },
  ])

  const deleteAllCards = () => {
    setCardData([]);
  };

  return (
    <>
      <Cards img={cardData[0].img} title={cardData[0].title} paragraph={cardData[0].paragraph} />
      <div>
      <button onClick={deleteAllCards}>Delete all</button>
      </div>
    </>
  )
}

export default App