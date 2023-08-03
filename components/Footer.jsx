import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" fill style={{ objectFit: "cover" }} alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Where Every Dish Is A Masterpiece And Every Customer Is Family...
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            345 Park Ave #304.
            <br /> NewYork, 85022
            <br /> (917) 123-4567
          </p>
          <p className={styles.text}>
            123 E 42nd S #235.
            <br /> NewYork, 85022
            <br /> (201) 867-1011
          </p>
          <p className={styles.text}>
            1616 Grand Concourse
            <br /> Bronx,NY 10452
            <br /> (917) 867-1012
          </p>
          <p className={styles.text}>
            800 6th Ave #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 12 – 11pm
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 2 – 11pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
