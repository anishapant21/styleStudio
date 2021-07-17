import React, { useState } from "react";
import FilterMenu from "./FilterMenu";
import Item from "./Item";
import { SimpleGrid, Box } from "@chakra-ui/react";

const WishMenu = ({ items }) => {
  console.log(items);

  const renderedListAgain = items.map((wishmenuitem) => {
    if (wishmenuitem?.title) {
      console.log(wishmenuitem.title);
      const { id, title, img, price } = wishmenuitem;
      return <Item key={id} title={title} img={img} price={price} />;
    }
  });

  return (
    <div style={{ marginTop: "150px" }}>
      <SimpleGrid columns={4} rowGap={20}>
        {renderedListAgain}
      </SimpleGrid>
    </div>
  );
};

export default WishMenu;
