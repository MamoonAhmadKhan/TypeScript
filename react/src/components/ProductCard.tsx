interface Product {
    name: string;
    price: number;
    isBestSeller?: boolean;
}

const ProductCard = (props: Product) => {
    const { name, price, isBestSeller = false } = props;

  return (
    <article className="product-card">
        <h2>{name}</h2> <span>{isBestSeller && "Best Seller 🔷"}</span>
        <p>Rs. {price}</p>
    </article>
  )
}

export default ProductCard;