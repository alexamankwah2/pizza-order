import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard"

const ProductList = ({productList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Experience Heaven In Every Slice</h1>
      <p className={styles.desc}>
      Located in the heart of the city, this pizza restaurant is a popular spot for pizza lovers. The restaurant uses high-quality ingredients to make their pizzas, including fresh vegetables, meats, and cheeses. Whether you're looking for a quick slice or a full meal with friends and family, this pizza restaurant is a great choice for delicious, authentic pizza.
      </p>
      <div className={styles.wrapper}>
        {productList.map((product) => (
          <ProductCard key={product._id} product={product}/>

        ))}
          
          
       
      </div>
    </div>
  );
};

export default ProductList;
