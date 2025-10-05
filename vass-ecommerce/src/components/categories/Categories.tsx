import React from "react";

function Categories() { 

    return(
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            fontSize:"30px",
            marginTop:"50px",
        }}>
            <h2> <b>Explore By Category</b></h2>
            <h2 style={{
                fontSize:"20px"
            }}>Find what you need for your space</h2>
        </div>
    )
}

export default Categories;