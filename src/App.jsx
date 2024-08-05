import "./App.css";

const ProductPage = ({ productInformation, inStock }) => {
  const image = "https://via.placeholder.com/150";
  const productInStock = inStock ? (
    <p>In Stock</p>
  ) : (
    <p>Currently out of stock</p>
  );
  return (
    <div>
      <h1>Product Page</h1>
      <h2>{productInformation.name}</h2>
      <img src={image} alt="iPhone 15 Pro" />
      <p>
        <strong>Price:</strong> ${productInformation.price}
      </p>
      <p>
        <strong>Color:</strong> {productInformation.color}
      </p>
      <p>
        <strong>Description:</strong> {productInformation.description}
      </p>
      <p>
        <strong>{productInStock}</strong>
      </p>
      <footer>
        <p>&copy; 2024 Apple Inc.</p>
      </footer>
    </div>
  );
};

export default function App() {
  const productInformation = {
    id: 1,
    name: "iPhone 15 Pro",
    price: 499.99,
    color: "Midnight Green",
    description:
      "The lastest flagship smartphone from Apple with cutting-edge features and stunning design.",
  };
  return (
    <main>
      <ProductPage productInformation={productInformation} inStock={true} />
    </main>
  );
}
