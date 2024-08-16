import React, { useContext, useEffect, useState } from "react";

import Heart from "../../assets/Heart";
import "./Posts.css";
import { FirebaseContext } from "../../context/FireContext";
import { PostContext } from "../../context/PostContext";
import { useNavigate } from "react-router-dom";

function Posts() {

  const navigate = useNavigate()

  const { getProduct } = useContext(FirebaseContext); //  For Getting Product (All Pro Showing)

  const { setPostProduct } = useContext(PostContext);

  const [products, setProduct] = useState([]);

  useEffect(() => {
    
    getProduct(setProduct)
    
  }, []);

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>

        <div className="cards">
          {products?.map((product,i) => {
            return(
            
              <div key={i} className="card" onClick={() => {

                setPostProduct(() => {

                  localStorage.setItem("post", JSON.stringify(product));
                  return product;

                })

                navigate('/view')

              }}>

                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img style={{width:'180px'}} src={product.dowloadURL} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name"> {product.name}</p>
                </div>
                <div className="date">
                  <span>{product.createdAt}</span>
                </div>
              </div>

            )
          })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
