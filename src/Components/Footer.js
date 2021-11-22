import React from "react";
import '../Css/Footer.css';


const Footer = () => {
    return(
        <div className="main-footer">
            <div className="footer-container">
                <div className="row">
                    <div className="col">
                        <h4>Contact us</h4>
                        <ul className="list-unstyled">
                            <li>+47 888 88 888</li>
                            <li>Bergen, Norge</li>
                            <li>5007 Bergen</li>
                        </ul>
                        
                    </div>
                    <div className="col">
                        <h4>Costumer service</h4>
                        <ul className="list-unstyled">
                            <li>pizzaBella.costumer@gmail.com</li>
                            <li>+47 555 55 555</li>
                            <li>5007 Bergen</li>
                        </ul>

                    </div>
                    <div className="col">
                        <h4>About us</h4>
                        <ul className="list-unstyled">
                            <li>Italian resturant designed by Bella</li>
                            <li>Vi support food from the garden</li>
                            <li>#PizzeriaBella</li>
                        </ul>

                    </div>
                    <hr />
                </div>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Contact us | Costumer service | About us
                    </p>
                </div>
            </div>
        </div>
    );
}


export default Footer