import classes from "./Productivialogo.module.css";
import productiviaLogo from "../assets/Productivia_Logo.png";

const ProductiviaLogo = () => {
  return (
    <a href="/Home" className={classes.productiviaLogo}>
      <img src={productiviaLogo} alt="productiviaLogo" />
      <h2>Productivia</h2>
    </a>
  );
};

export default ProductiviaLogo;
