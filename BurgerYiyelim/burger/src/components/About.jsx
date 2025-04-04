import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          accusamus voluptatum veritatis itaque explicabo. Est ipsam laudantium
          sint consectetur dicta dolorum voluptatibus doloribus cupiditate!
          Voluptas quas placeat libero assumenda fugiat? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. A sequi temporibus at molestiae
          est? Aut cum laudantium veritatis obcaecati iste ut harum molestias
          eaque, fuga architecto dignissimos officia numquam velit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Aut vitae quo adipisci
          veritatis ipsum omnis minima quis reprehenderit, voluptatum facere
          temporibus placeat molestias iusto rerum delectus laborum labore quae
          ducimus! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Dolorem reprehenderit expedita est quas vero, ex assumenda numquam,
          repudiandae voluptas, ipsa nostrum veniam in perspiciatis aspernatur
          iure! Necessitatibus expedita illum explicabo! Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Consequuntur iure, facere ab earum
          animi sint. Numquam dolores fuga dolor repellat tempore expedita earum
          autem. Ab dignissimos dolor incidunt accusantium debitis?
        </p>
      </div>
    </div>
  );
};
