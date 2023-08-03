import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import ProductCard from "./ProductCard";

const Navbar = () => {

  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}> 212 123 4567</div>
        </div>
      </div>
      <div className={styles.item} >
        <ul className={styles.list}>
          <Link href='/' passHref>
          <li className={styles.listItem}>Homepage</li>
          </Link>
          {/* <li className={styles.listItem}>Products</li> */}
          <a href="#menu">
          <li className={styles.listItem}>Menu</li>
          </a>
          <Link href='/' passHref>
          <Image src="/img/logo-white.png" alt="" width="130" height="100" />
          </Link>
          <Link href="/admin">
          <li className={styles.listItem}>Admin</li>
          </Link>
          {/* <li className={styles.listItem}>Contact</li> */}
        </ul>
      </div>
      <Link href='/cart' passHref>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30" height="30" />
          <div className={styles.counter}>{quantity}</div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Navbar;
