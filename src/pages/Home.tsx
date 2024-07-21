//Mejorar las importaciones
import { useContext } from "react";
import { Categories } from "../components/Categories/Categories";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { ProductInfo } from "../components/ProductInfo/ProductInfo";
import { GlobalContext } from "../provider/Provider";
import { StoreInfo } from "../components/StoreInfo/StoreInfo";
import { Footer } from "../components/Footer/Footer";
import { FooterClaim } from "../components/FooterClaim/FooterClaim";
import { Rrss } from "../components/Rrss/Rrss";
import { SecondCard } from "../components/SecondCard/SecondCard";
import { CardOne } from "../components/CardoOne/CardOne";
import { CardTwo } from "../components/CardTwo/CardTwo";
import { Button } from "../components/Button/Button";
import { BigCard } from "../components/BigCard/BigCard";
import { Category } from "../components/Category/Category";
import { Rutas } from "../routes/Routes";
import { FooterLogo } from "../components/FooterLogo/FooterLogo";
import { FooterNavbar } from "../components/FooterNavbar/FooterNavbar";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Home = () => {
  const { items, thumbnail } = useContext(GlobalContext);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <Hero>
        <Header />

        <ProductInfo
          title={items[2].name}
          claim={items[2].claim}
          button={
            <Button
              path={Rutas.PRODUCT_ID.replace(":id", `${items[2].id}`)}
              text="See Product"
            />
          }
        />
      </Hero>

      <div className="wrapper">
        <div className="m-top-200">
          <Categories>
            <div data-aos="fade-up">
              <Category
                title={items[0].category}
                img={thumbnail[0].src}
                route={Rutas.HEADPHONES}
              />
            </div>

            <div data-aos="fade-up">
              <Category
                title={items[5].category}
                img={thumbnail[1].src}
                route={Rutas.SPEAKERS}
              />
            </div>

            <div data-aos="fade-up">
              <Category
                title={items[3].category}
                img={thumbnail[2].src}
                route={Rutas.EARPHONES}
              />
            </div>
          </Categories>
        </div>

        <BigCard
          name={items[5].name}
          claim={items[5].claim}
          button={
            <Button
              path={Rutas.PRODUCT_ID.replace(":id", `${items[5].id}`)}
              text="See Product"
            />
          }
        />

        <SecondCard
          button={
            <Button
              path={Rutas.PRODUCT_ID.replace(":id", `${items[4].id}`)}
              text="See Product"
            />
          }
        />

        <div className="responsiveGrid m-top m-bottom">
          <CardOne />

          <CardTwo
            name={items[3].name}
            button={
              <Button
                path={Rutas.PRODUCT_ID.replace(":id", `${items[3].id}`)}
                text="See Product"
              />
            }
          />
        </div>
        
        <div data-aos="fade-up">
          <StoreInfo />
        </div>
      </div>

      <Footer>
        <div className="responsiveFooterNav">
          <FooterLogo />
          <FooterNavbar />
        </div>

        <div className="d-flex">
          <FooterClaim />
          <Rrss />
        </div>
      </Footer>
    </>
  );
};
