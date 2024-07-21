import { Navbar } from "../Header/Navbar/Navbar";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { Cart } from "./Cart/Cart";
import { Logo } from "./Logo/Logo";
import styles from "./styles/Header.module.scss";

export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <MobileMenu />
        <Logo />
        <Navbar />
        <Cart />
      </div>
    </>
  );
};
