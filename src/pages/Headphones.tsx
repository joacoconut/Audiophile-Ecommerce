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
import { InvertedItemComponent } from "../components/InvertedItemComponent/InvertedItemComponent";
import { Button } from "../components/Button/Button";
import { Category } from "../components/Category/Category";
import { Rutas } from "../routes/Routes";
import { BlackHeader } from "../components/BlackHeader/BlackHeader";
import { FooterLogo } from "../components/FooterLogo/FooterLogo";
import { FooterNavbar } from "../components/FooterNavbar/FooterNavbar";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Headphones = () => {
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
          <CategoryTitle category={items[0].category} />
        </div>
      </BlackHeader>

      <div className="wrapper">
        <div className=" m-bottomV2">
          <div data-aos="fade-right">
            <ItemComponent
              src={items[2].src}
              special="New Product"
              name={items[2].name}
              description={items[2].description}
              button={
                <Button
                  path={Rutas.PRODUCT_ID.replace(":id", `${items[2].id}`)}
                  text="See Product"
                />
              }
            />
          </div>

          <div data-aos="fade-left">
            <InvertedItemComponent
              src={items[1].src}
              name={items[1].name}
              description={items[1].description}
              button={
                <Button
                  path={Rutas.PRODUCT_ID.replace(":id", `${items[1].id}`)}
                  text="See Product"
                />
              }
            />
          </div>

          <div data-aos="fade-right">
            <ItemComponent
              src={items[0].src}
              name={items[0].name}
              description={items[0].description}
              button={
                <Button
                  path={Rutas.PRODUCT_ID.replace(":id", `${items[0].id}`)}
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

      {/* ------ FOOTER ------  */}
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
