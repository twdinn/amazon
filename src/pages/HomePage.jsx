import Header from "../components/Header";
import Product from "../components/Product";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home_container">
        <Header />
        <img
          className="home_image"
          src="/images/Prime-Video-logo.jpeg"
          alt="prime-logo"
        />

        <div className="home_row">
          <Product
            id="12321341"
            name="Burner (Gray Man Book 12)"
            price={39.0}
            rating={4}
            image="./images/greaney-burner.jpeg"
          />
          <Product
            id="49538094"
            name="Montreal Canadiens Acoustic Guitar"
            price={300}
            rating={5}
            image="./images/habs-guitar.jpeg"
          />
        </div>

        <div className="home_row">
          <Product
            id="4903850"
            name="Apple 2021 11-inch iPad Pro (Wi-Fi, 128GB)"
            price={1499.0}
            rating={5}
            image="./images/ipad-pro.jpeg"
          />
          <Product
            id="23445930"
            name="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={54.99}
            rating={5}
            image="./images/echo-dot.jpeg"
          />
          <Product
            id="3254354345"
            name="Razer Blade Gaming Laptop"
            price={5199.99}
            rating={4}
            image="./images/Razer-Blade-Laptop-15.jpeg"
          />
        </div>

        <div className="home_row">
          <Product
            id="90829332"
            name="Sony X85K 43-inch 4K HDR LED Smart TV with Google TV"
            price={798.0}
            rating={4}
            image="./images/sony-tv.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
