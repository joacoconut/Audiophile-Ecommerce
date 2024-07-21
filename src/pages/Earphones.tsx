import { useContext } from "react";
import { GlobalContext } from "../provider/Provider";
import { Header } from "../components/Header/Header";
import { Categories } from "../components/Categories/Categories";
import { StoreInfo } from "../components/StoreInfo/StoreInfo";
import { Footer } from "../components/Footer/Footer";
import { FooterClaim } from "../components/FooterClaim/FooterClaim";
import { Rrss } from "../components/Rrss/Rrss";
import { CategoryTitle } from "../components/CategoryTitle/CategoryTitle";
import { ItemComponent } from "../components/ItemComponent/ItemComponent";
import { Button } from "../components/Button/Button";
import { Category } from "../components/Category/Category";
import { Rutas } from "../routes/Routes";
import { BlackHeader } from "../components/BlackHeader/BlackHeader";
import { FooterLogo } from "../components/FooterLogo/FooterLogo";
import { FooterNavbar } from "../components/FooterNavbar/FooterNavbar";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Earphones = () => {
  const { items, thumbnail } = useContext(GlobalContext);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <BlackHeader>
        <Header />

        <div className="center">
          <CategoryTitle category={items[3].category} />
        </div>
      </BlackHeader>

      <div className="wrapper">
        <div className="m-bottomV2">
          <div data-aos="fade-right">
            <ItemComponent
              src={items[3].src}
              special="New Product"
              name={items[3].name}
              description={items[3].description}
              button={
                <Button
                  path={Rutas.PRODUCT_ID.replace(":id", `${items[3].id}`)}
                  text="See Product"
                />
              }
            />
          </div>
        </div>

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
