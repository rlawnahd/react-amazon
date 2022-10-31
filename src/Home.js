import { Outbound, Outlet } from "@mui/icons-material";
import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg"
          alt="배경이미지"
        />
        <div className="home_row">
          <Product
            id="2323"
            title="제품1입니다"
            price={3000}
            image="https://i.imgur.com/pD4oyC6.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="2322"
            title="제품1입니다"
            price={3000}
            image="https://i.imgur.com/pD4oyC6.jpg"
            rating={5}
          />
          <Product
            id="2321"
            title="제품1입니다"
            price={3000}
            image="https://i.imgur.com/pD4oyC6.jpg"
            rating={5}
          />
          <Product
            id="2320"
            title="제품1입니다"
            price={3000}
            image="https://i.imgur.com/pD4oyC6.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="2319"
            title="제품1입니다"
            price={3000}
            image="https://i.imgur.com/pD4oyC6.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
