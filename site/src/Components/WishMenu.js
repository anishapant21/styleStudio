import React from "react";
import Item from "./Item";
import { SimpleGrid } from "@chakra-ui/react";

const WishMenu = ({ items }) => {
  const renderedListAgain = items.map((wishmenuitem) => {
    if (wishmenuitem?.title) {
      const { id, title, img, price } = wishmenuitem;
      return <Item key={id} title={title} img={img} price={price} />;
    }
    return <Item />;
  });

  return (
    <div style={{ marginTop: "1vw" }}>
      <SimpleGrid columns={4} rowGap={20}>
        {renderedListAgain}
      </SimpleGrid>
    </div>
  );
};

export default WishMenu;
