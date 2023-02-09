import Header from "../components/Header";
import Product from "../components/Product";
import { v4 as uuidv4 } from "uuid";

const HomePage = () => {
  const id = uuidv4();
  return (
    <>
      <Header />
      <div className="home">
        <div className="home_container">
          {/* Logo */}
          <img
            className="home_image"
            src="/images/Prime-Video-logo.jpeg"
            alt="prime-logo"
          />

          {/* Render a row of products */}
          <div className="home_row">
            <Product
              id={id}
              name="Burner (Gray Man Book 12)"
              price={39.0}
              rating={4}
              image="./images/greaney-burner.jpeg"
            />

            <Product
              id={id}
              name="Montreal Canadiens Acoustic Guitar"
              price={300}
              rating={5}
              image="./images/habs-guitar.jpeg"
            />
          </div>

          {/* Render a row of products */}
          <div className="home_row">
            <Product
              id={id}
              name="Apple 2021 11-inch iPad Pro (Wi-Fi, 128GB)"
              price={1499.0}
              rating={5}
              image="./images/ipad-pro.jpeg"
            />
            <Product
              id={id}
              name="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={54.99}
              rating={5}
              image="./images/echo-dot.jpeg"
            />
            <Product
              id={id}
              name="Razer Blade Gaming Laptop"
              price={5199.99}
              rating={4}
              image="./images/Razer-Blade-Laptop-15.jpeg"
            />
          </div>

          {/* Render a row of products */}
          <div className="home_row">
            <Product
              id={id}
              name="Sony X85K 43-inch 4K HDR LED Smart TV with Google TV"
              price={798.0}
              rating={4}
              image="./images/sony-tv.jpeg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
