import React from "react";
import { Carousel } from "react-bootstrap";

export default function Carrossel(){
    return (
        <div>
            <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp8623049.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-100679.jpg?w=2000"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.vexels.com/media/users/3/4546/raw/7261754de66a72c34aa64c7e5cb41d26-red-technology-background.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            
        </div>
    )
}