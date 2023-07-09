import React from "react";

//create the Jumbotron component
const Jumbotron = () => {
    return (
    <div className="p-5 mb-2 bg-light rounded-3 text-start">
      <div className="container pt-5">
        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        <p className="fs-5 pb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quos placeat sed vitae, esse odit excepturi ut odio ipsa eum ad eveniet tempora, adipisci sit laudantium at! Nostrum, sapiente quibusdam.</p>
        <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
      </div>
    </div>
    )
};
export default Jumbotron;