import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD } from "../../../controller/action";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai";

export default function ProductItem({ cartItems }) {
  const dispatch = useDispatch();
  const addToCart = (e) => {
    // console.log(e)
    dispatch(ADD(e));
  };

  const [openImage, setOpenImage] = useState(false);
  const [img, setImg] = useState("");

  const onOpenImage = (src) => {
    setImg(src);
    setOpenImage(true);
  };

  return (
    <>
      <div className="product_items">
        {cartItems.map((item) => (
          <div className="box" key={item.id}>
            <div className="img">
              <img src={item.cover} alt="" />
              <div className="overlay">
                <button className="button" onClick={() => addToCart(item)}>
                  <FiShoppingBag />
                </button>
                <button className="button">
                  <AiOutlineHeart />
                </button>
                <button
                  className="button"
                  onClick={() => onOpenImage(item.cover)}
                >
                  <FiSearch />
                </button>
              </div>
            </div>
            <div className="details">
              <h3>{item.title}</h3>
              <p>{item.author}</p>
              <h4>${item.price}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className={openImage ? "modelOpen" : "modelClose"}>
        <div className="onClickImage">
          <img src={img} alt="" />
          <button className="button" onClick={() => setOpenImage(false)}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </>
  );
}
