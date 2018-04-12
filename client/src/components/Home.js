import React from "react";


const Background ={
    backgroundImage: "url('/images/bg1.png')",
    // Function in Css calculating the correct height of the image
    height: "calc(100vh - 108px)",
    // backgroundRepeat: "noRepeat"
    width: "100%",
    backgroundSize: "cover"
  };

const Font ={
    color: "white",
    textAlign: "center"
};
  

const Home = () => 
<div style={Background}>
   <h1 style={Font}> Van Goghs Dough - Need to PhotoShop this pic </h1>
</div>
   

export default Home;