import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx"

//create your first component
const Home = () => {
    return (
		<div>
			<Navbar />
        <div className="container">
			<div>
				<Jumbotron />
			</div>
            <div className="card-group">
                <Card description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde illo culpa assumenda molestiae in."/>
                <Card description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum iure ducimus laborum adipisci iusto itaque. Voluptates debitis sit labore."/>
                <Card description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde illo culpa assumenda molestiae in."/>
                <Card description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum iure ducimus laborum adipisci iusto itaque. Voluptates debitis sit labore."/>
            </div>
        </div>
        <Footer />
		</div>
    );
};
export default Home;