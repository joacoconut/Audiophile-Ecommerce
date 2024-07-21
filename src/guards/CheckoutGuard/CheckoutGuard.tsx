import { Navigate, Outlet } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { Rutas } from "../../routes/Routes";

const CheckoutGuard = () => {
  const { cart } = useCart();

  if (!cart.length) return <Navigate to={Rutas.ROOT} />;

  return <Outlet />;
};

export default CheckoutGuard;
