import React from "react";
import FilterMenu from "./FilterMenu";
import Item from "./Item";

const WishMenu = ({ items }) => {
  console.log(items);
  const renderedListAgain = items.map((wishmenuitem) => {
    if (wishmenuitem?.title) {
      console.log(wishmenuitem.title);
      const { id, title, img, price } = wishmenuitem;
      return <Item key={id} title={title} img={img} price={price} />;
    }
    // !!!wishmenuitem
    //   ? console.log(wishmenuitem.id)
    //   : console.log("data Unavailable");
    // const { title, img, price } = wishmenuitem;
    // console.log(title);
  });

  return <div>{renderedListAgain}</div>;
};

export default WishMenu;
