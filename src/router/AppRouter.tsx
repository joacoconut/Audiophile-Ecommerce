import { Route, Routes, useLocation } from "react-router-dom";
import { Earphones } from "../pages/Earphones";
import { Headphones } from "../pages/Headphones";
import { Home } from "../pages/Home";
import { Speakers } from "../pages/Speakers";
import { Rutas } from "../routes/Routes";
import { useEffect } from "react";
import { ProductDetail } from "../components/ProductDetail/ProductDetail";
import { Checkout } from "../pages/Checkout";
import CheckoutGuard from "../guards/CheckoutGuard/CheckoutGuard";

export const AppRouter = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [location]);

  return (
    <>
      <Routes>
        <Route path={Rutas.ROOT} element={<Home />} />
        <Route path={Rutas.HEADPHONES} element={<Headphones />} />
        <Route path={Rutas.SPEAKERS} element={<Speakers />} />
        <Route path={Rutas.EARPHONES} element={<Earphones />} />

        <Route element={<CheckoutGuard />}>
          <Route path={Rutas.CHECKOUT} element={<Checkout />} />
        </Route>

        {/* ---- ITEMS PAGES DINÁMICO ---- */}
        <Route path={Rutas.PRODUCT_ID} element={<ProductDetail />} />

        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
};
