import React, { useState } from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import "../style/Item.css";
import { useHistory } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

const Item = ({ img, title, price, id }) => {
  const [heartClick, setHeartClick] = useState(false);
  const rupee = `RS ${price}`;
  const history = useHistory();
  const clickDetail = (e) => {
    console.log("i am baby e", e);
    history.push({
      pathname: "/productdetail",
      state: { productName: e },
    });
  };
  const callToMakeYourHeart = () => {
    setHeartClick(!heartClick);
  };
  let renderHeart;
  if (heartClick === false) {
    renderHeart = "heartisempty";
  } else {
    renderHeart = "heartisfull";
  }

  return (
    <>
      <Box className="boxme">
        <img
          onClick={() => {
            clickDetail(title);
          }}
          className="imageme"
          src={img}
        />
        <div className="price">
          {rupee}

          <FiHeart
            onClick={() => callToMakeYourHeart()}
            className={renderHeart}
          />
        </div>
        <div className="name">{title}</div>
      </Box>
    </>
  );
};

export default Item;
