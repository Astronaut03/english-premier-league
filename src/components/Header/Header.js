import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../Photo/banner.jpg';
import img2 from '../../Photo/female.png';
import img3 from '../../Photo/MNU.jpg';


const Header = () => {
    return (
        <div>
            <Carousel controls={false} fade={true} pause={false}>
            <Carousel.Item interval={7000}>
                <img
                src={img1} height="450px" width="100%" alt="First slide"
                />
                <Carousel.Caption>
                <h3>English Premier League</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={7000}>
                <img
                src={img2} height="450px" width="100%" alt="Second slide"
                />
                <Carousel.Caption>
                <h3>English Premier League</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={7000}>
                <img
                src={img3} height="450px" width="100%" alt="Third slide"
                />
                <Carousel.Caption>
                <h3>English Premier League</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;