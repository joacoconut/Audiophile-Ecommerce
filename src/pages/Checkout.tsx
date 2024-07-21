import { Footer } from "../components/Footer/Footer";
import { BlackHeader } from "../components/BlackHeader/BlackHeader";
import { Header } from "../components/Header/Header";
import { FooterLogo } from "../components/FooterLogo/FooterLogo";
import { FooterNavbar } from "../components/FooterNavbar/FooterNavbar";
import { FooterClaim } from "../components/FooterClaim/FooterClaim";
import { Rrss } from "../components/Rrss/Rrss";
import { Form } from "../components/Form/Form";
import { GoBack } from "../components/GoBack/GoBack";

export const Checkout = () => {
  return (
    <div className="checkoutBody">
      <BlackHeader>
        <Header />
      </BlackHeader>

      <div className="wrapper">
        <GoBack />

        <Form />
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
    </div>
  );
};
