import React, { useContext, useEffect, useState } from "react";

import "./View.css";
import Header from "../../components/Header/Header";
import { FirebaseContext } from "../../context/FireContext";
import { PostContext } from "../../context/PostContext";

function View() {
  const [userDetails, setUserDetails] = useState("");

  const { postProduct } = useContext(PostContext);
  const { singleProView } = useContext(FirebaseContext);

  useEffect(() => {
    singleProView(postProduct, setUserDetails);
  });

  return (
    <>
      <Header />

      <div className="viewParentDiv">
        <div className="imageShowDiv">
          <img src={postProduct.dowloadURL} alt="" />
        </div>
        <div className="rightSection">
          <div className="productDetails">
            <p>&#x20B9; {postProduct.price} </p>
            <span>{postProduct.name}</span>
            <p>{postProduct.category}</p>
            <span>{postProduct.createdAt}</span>
          </div>
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails?.name}</p>
            <p>{userDetails?.phone}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default View;
