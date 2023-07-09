import React from "react";

//create the card component
const Card = (props) => {
    return (
    <div className="card border m-3" style={{width: "18rem"}}>
        <img src="https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png" className="card-img-top" />
        <div className="card-body text-center">
             <h5 className="card-title">Card title</h5>
             <p className="card-text">{props.description}</p>
         </div>
        <div className="card-footer text-center pt-2">
            <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
    </div> 
    );
};
export default Card;