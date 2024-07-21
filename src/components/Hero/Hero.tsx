import styles from "./styles/Hero.module.scss";
import { ReactElement } from "react";

interface Props {
  children: ReactElement | ReactElement[];
}

export const Hero = ({ children }: Props) => {

  return (
    <>
      <div className={styles.hero}> {children} </div>
    </>
  );
};
