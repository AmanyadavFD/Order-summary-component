import React, { type FC } from "react";
import type { CardInterface } from "../types";

interface CardProps {
  data: CardInterface;
}

const Card: FC<CardProps> = ({ data }) => {
  const {
    image,
    heading,
    description,
    annualData: { icon, subHeading, price, chnage },
  } = data;
  return (
    <section className="card">
      <div className="card__image">
        <img src={image} alt={heading} />
      </div>
      <div className="card__content">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
      <div className="card__plan">
        <img src={icon} />
        <div>
          <h5>{subHeading}</h5>
          <p>{price}</p>
          <button>{chnage}</button>
        </div>
      </div>
      <div className="card__buttons">
        <button className="card__buttons-payment">Proceed to Payment</button>
        <button className="card__buttons-cancel">Cancel Order</button>
      </div>
    </section>
  );
};

export default Card;
