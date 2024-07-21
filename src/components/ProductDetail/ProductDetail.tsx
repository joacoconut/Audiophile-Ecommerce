import { useContext } from "react";
import { Rutas } from "../../routes/Routes";
import { BlackHeader } from "../BlackHeader/BlackHeader";
import { Button } from "../Button/Button";
import { Categories } from "../Categories/Categories";
import { Category } from "../Category/Category";
import { Features } from "../Features/Features";
import { Footer } from "../Footer/Footer";
import { FooterClaim } from "../FooterClaim/FooterClaim";
import { Galery } from "../Galery/Galery";
import { MayLikeComponent } from "../MayLikeComponent/MayLikeComponent";
import { Rrss } from "../Rrss/Rrss";
import { StoreInfo } from "../StoreInfo/StoreInfo";
import { GlobalContext } from "../../provider/Provider";
import { useParams } from "react-router-dom";
import { Header } from "../Header/Header";
import { FooterLogo } from "../FooterLogo/FooterLogo";
import { FooterNavbar } from "../FooterNavbar/FooterNavbar";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { GoBack } from "../GoBack/GoBack";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ProductDetail = () => {
  const { items, thumbnail } = useContext(GlobalContext);

  const params = useParams<{ id: string }>();
  const product = items.find((product) => product.id === Number(params.id));

  if (!product) return <h1>Product not found</h1>;

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <BlackHeader>
        <Header />
      </BlackHeader>

      <div className="wrapper">
        <div data-aos="fade-up">
          <GoBack />
        </div>

        <div className="mtop-negative-100 m-bottomV2">
          <div data-aos="fade-up">
            <ItemDetail
              src={product.src}
              name={product.name}
              description={product.description}
              price={product.price}
              id={product.id}
              quantity={product.quantity}
            />
          </div>

          <Features
            feature={product.feature}
            secondFeature={product.secondFeature}
            box={product.box}
          />

          <Galery
            src1={product.galery[0].src}
            src2={product.galery[1].src}
            src3={product.galery[2].src}
            name={product.name}
          />

          <div className="df-column-center m-top-150">
            <h2 className="f-size m-bottom-50">You May Also Like</h2>

            <div className="responsiveCategories">
              <div data-aos="fade-up">
                <MayLikeComponent
                  src={items[4].src}
                  name="ZX7 Speaker"
                  button={
                    <Button
                      path={`/product/${items[4].id}`}
                      text="See Product"
                    />
                  }
                />
              </div>

              <div data-aos="fade-up">
                <MayLikeComponent
                  src={items[1].src}
                  name="XX99 Mark I "
                  button={
                    <Button
                      path={`/product/${items[1].id}`}
                      text="See Product"
                    />
                  }
                />
              </div>

              <div data-aos="fade-up">
                <MayLikeComponent
                  src={items[0].src}
                  name="XX59"
                  button={
                    <Button
                      path={`/product/${items[0].id}`}
                      text="See Product"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <Categories>
          <div data-aos="fade-right">
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

          <div data-aos="fade-left">
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
