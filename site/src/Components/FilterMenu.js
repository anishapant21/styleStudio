import React from "react";
import Item from "./Item";
import { SimpleGrid } from "@chakra-ui/react";
import "../style/Item.css";

const FilterMenu = ({ items }) => {
  const renderedList = items.map((menuItem) => {
    const { id, title, img, price } = menuItem;
    return <Item key={id} title={title} img={img} price={price} />;
  });

  return (
    <div style={{ marginTop: "150px" }}>
      <SimpleGrid columns={4} rowGap={20}>
        {renderedList}
      </SimpleGrid>
    </div>
  );
};

export default FilterMenu;
