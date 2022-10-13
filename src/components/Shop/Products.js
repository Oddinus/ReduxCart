import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 77,
    title: "React Book",
    description: "My big learning book",
  },
  {
    id: "p2",
    price: 1,
    title: "Pen",
    description: "Just pen",
  },
  {
    id: "p3",
    price: 29.99,
    title: "Cyberpunk",
    description: "One of amazing games",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
