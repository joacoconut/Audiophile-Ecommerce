import { useForm } from "react-hook-form";
import styles from "./styles/Form.module.scss";
import { useCart } from "../../hooks/useCart";
import { SummaryItem } from "../SummaryItem/SummaryItem";
import { Total } from "../Total/Total";
import { Shipping } from "../Shipping/Shipping";
import { Vat } from "../Vat/Vat";
import { useContext, useState } from "react";
import { GlobalContext } from "../../provider/Provider";
import { GrandTotal } from "../GrandTotal/GrandTotal";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { ModalContent } from "../ModalContent/ModalContent";

//* Form names // NOMBRES DE LOS CAMPOS
enum FormFields {
  NAME = "name",
  EMAIL = "email",
  NUMBER = "number",
  ADDRESS = "address",
  CODE = "code",
  CITY = "city",
  COUNTRY = "country",
  METHOD = "e-money",
  ENUMBER = "enumber",
  EPIN = "epin",
}

//* Form values // TIPADO
interface IForm {
  [FormFields.NAME]: string;
  [FormFields.EMAIL]: string;
  [FormFields.NUMBER]: number;
  [FormFields.ADDRESS]: string;
  [FormFields.CODE]: number;
  [FormFields.CITY]: string;
  [FormFields.COUNTRY]: string;
  [FormFields.METHOD]: string;
  [FormFields.ENUMBER]: string;
  [FormFields.EPIN]: string;
}

export const Form = () => {
  const [modal, setModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IForm>({
    defaultValues: {
      // Valores por defecto
      [FormFields.NAME]: "",
      [FormFields.EMAIL]: "",
      [FormFields.ADDRESS]: "",
      [FormFields.CITY]: "",
      [FormFields.COUNTRY]: "",
      [FormFields.METHOD]: "",
      [FormFields.ENUMBER]: "",
      [FormFields.EPIN]: "",
    },
    mode: "all",
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const { cart } = useCart();
  const { items } = useContext(GlobalContext);

  const navigate = useNavigate();

  cart.length === 0 ? navigate("/") : "";

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.checkoutContainer}>
          <h1 className={styles.formHeading}>Checkout</h1>

          <div className={styles.formSection}>
            <h3 className={styles.formSectionHeading}>Billing Details</h3>

            <div className={styles.formInputPack}>
              <div className={styles.inputContainer}>
                <label
                  className={
                    errors.name ? styles.labelAlert : styles.formInputLabel
                  }
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className={errors.name ? styles.inputAlert : styles.formInput}
                  type="text"
                  id="name"
                  placeholder="Insert your name"
                  {...register(FormFields.NAME, {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                    pattern: {
                      value:
                        /^[A-Za-záãäéëêíîóöúüñç]+\s?[A-Za-záãäéëêíîóöúüñç]+\s?$/,
                      message: "Invalid format",
                    },
                    maxLength: {
                      value: 20,
                      message: "Max length",
                    },
                  })}
                />

                {errors.name && (
                  <span className={styles.alert}> {errors.name.message} </span>
                )}
              </div>

              <div className={styles.inputContainer}>
                <label
                  className={
                    errors.email ? styles.labelAlert : styles.formInputLabel
                  }
                  htmlFor="email"
                >
                  {" "}
                  Email Address{" "}
                </label>
                <input
                  className={
                    errors.email ? styles.inputAlert : styles.formInput
                  }
                  type="email"
                  id="email"
                  placeholder="Insert your email"
                  {...register(FormFields.EMAIL, {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/,
                      message: "Email is not valid",
                    },
                  })}
                />

                {errors.email && (
                  <span className={styles.alert}> {errors.email.message} </span>
                )}
              </div>
            </div>

            <div className={styles.formInputPack}>
              <div className={styles.inputContainer}>
                <label
                  className={
                    errors.number ? styles.labelAlert : styles.formInputLabel
                  }
                  htmlFor="number"
                >
                  {" "}
                  Phone Number{" "}
                </label>
                <input
                  className={
                    errors.number ? styles.inputAlert : styles.formInput
                  }
                  type="number"
                  id="number"
                  placeholder="Insert your number"
                  {...register(FormFields.NUMBER, {
                    required: {
                      value: true,
                      message: "Number is required",
                    },
                    maxLength: {
                      value: 23,
                      message: "Invalid. Max length reached",
                    },
                  })}
                />

                {errors.number && (
                  <span className={styles.alert}>
                    {" "}
                    {errors.number.message}{" "}
                  </span>
                )}
              </div>

              <div className={styles.a}></div>
            </div>
          </div>

          {/* --- SHIPPING INFO SECTION ---  */}
          <div className={styles.formSection}>
            <h3 className={styles.formSectionHeading}>Shipping Info</h3>

            <div className={styles.formInputPack}>
              <div className={styles.inputContainer}>
                <label
                  className={
                    errors.address ? styles.labelAlert : styles.formInputLabel
                  }
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className={
                    errors.address ? styles.inputAlert : styles.formInput
                  }
                  type="text"
                  id="address"
                  placeholder="Insert your address"
                  {...register(FormFields.ADDRESS, {
                    required: {
                      value: true,
                      message: "Address is required",
                    },
                  })}
                />

                {errors.address && (
                  <span className={styles.alert}>{errors.address.message}</span>
                )}
              </div>

              <div className={styles.a}></div>
            </div>

            <div className={styles.formInputPack}>
              <div className={styles.inputContainer}>
                <label
                  className={
                    errors.code ? styles.labelAlert : styles.formInputLabel
                  }
                  htmlFor="code"
                >
                  {" "}
                  ZIP Code{" "}
                </label>
                <input
                  className={errors.code ? styles.inputAlert : styles.formInput}
                  type="number"
                  id="code"
                  placeholder="Insert your code"
                  {...register(FormFields.CODE, {
                    required: {
                      value: true,
                      message: "Code is required",
                    },
                  })}
                />

                {errors.code && (
                  <span className={styles.alert}> {errors.code.message} </span>
                )}
              </div>

              <div className={styles.inputContainer}>
                <label
                  className={
                    errors.city ? styles.labelAlert : styles.formInputLabel
                  }
                  htmlFor="city"
                >
                  {" "}
                  City{" "}
                </label>
                <input
                  className={errors.city ? styles.inputAlert : styles.formInput}
                  type="text"
                  id="city"
                  placeholder="Insert your city"
                  {...register(FormFields.CITY, {
                    required: {
                      value: true,
                      message: "City is required",
                    },
                  })}
                />

                {errors.city && (
                  <span className={styles.alert}> {errors.city.message} </span>
                )}
              </div>
            </div>

            <div className={styles.formInputPack}>
              <div className={styles.inputContainer}>
                <label
                  className={
                    errors.country ? styles.labelAlert : styles.formInputLabel
                  }
                  htmlFor="country"
                >
                  {" "}
                  Country{" "}
                </label>
                <input
                  className={
                    errors.country ? styles.inputAlert : styles.formInput
                  }
                  type="text"
                  id="country"
                  placeholder="Insert your country"
                  {...register(FormFields.COUNTRY, {
                    required: {
                      value: true,
                      message: "Country is required",
                    },
                    pattern: {
                      value:
                        /^[A-Za-záãäéëêíîóöúüñç]+\s?[A-Za-záãäéëêíîóöúüñç]+\s?$/,
                      message: "Invalid format",
                    },
                  })}
                />

                {errors.country && (
                  <span className={styles.alert}>{errors.country.message}</span>
                )}
              </div>

              <div className={styles.a}></div>
            </div>
          </div>

          <div className={styles.formSection}>
            <div className={styles.formSection}>
              <h3 className={styles.formSectionHeading}> Payment Details </h3>

              <div className={styles.inputContainer}>
                <label
                  className={
                    errors.enumber ? styles.labelAlert : styles.formInputLabel
                  }
                  htmlFor="enumber"
                >
                  e-Money Number
                </label>
                <input
                  className={
                    errors.enumber ? styles.inputAlert : styles.formInput
                  }
                  type="number"
                  id="enumber"
                  placeholder="Insert your e-Number"
                  {...register(FormFields.ENUMBER, {
                    required: {
                      value: true,
                      message: "e-Number is required",
                    },
                    maxLength: {
                      value: 20,
                      message: "Max length reached"
                    }
                  })}
                />

                {errors.enumber && (
                  <span className={styles.alert}>{errors.enumber.message}</span>
                )}
              </div>

              <div className={styles.inputContainer}>
                <label
                  className={
                    errors.epin ? styles.labelAlert : styles.formInputLabel
                  }
                  htmlFor="e-moneyPin"
                >
                  e-Money Pin
                </label>
                <input
                  className={errors.epin ? styles.inputAlert : styles.formInput}
                  type="number"
                  id="e-moneyPin"
                  placeholder="Inser your Pin"
                  {...register(FormFields.EPIN, {
                    required: {
                      value: true,
                      message: "e-Pin is required",
                    },
                    minLength: {
                      value: 3,
                      message: "At least 3 numbers expected",
                    },
                  })}
                />

                {errors.epin && (
                  <span className={styles.alert}>{errors.epin.message}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.summary}>
          <h1 className={styles.summaryHeading}>Summary</h1>

          <div className={styles.itemsContainer}>
            {cart.length === 0
              ? ""
              : cart.map((item) => {
                  return <SummaryItem item={item} />;
                })}
          </div>

          <Total />
          <Shipping />
          <Vat
            total={cart.reduce((total, cartItem) => {
              const item = items.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)}
          />
          <GrandTotal
            total={cart.reduce((total, cartItem) => {
              const item = items.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)}
            shipping={50}
          />

          <button
            className={styles.buttonCheckout}
            disabled={!isValid}
            onClick={() => {
              setModal(true);
            }}
          >
            Continue & Pay
          </button>

          <Modal
            rootClassName={styles.myClass}
            onClose={() => setModal(false)}
            width={480}
            open={modal}
          >
            <ModalContent />
          </Modal>
        </div>
      </form>
    </>
  );
};
