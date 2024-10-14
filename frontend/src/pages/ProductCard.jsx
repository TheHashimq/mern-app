import "./ProductCard.css";
const ProductCard = ({ image, name, price, details }) => {
	return (
		<div className="product-card">
			<img src={image} alt={name} className="product-image" />
			<div className="product-info">
				<h2 className="product-name">{name}</h2>
				<p className="product-price">${price.toFixed(2)}</p>
				<p className="product-details">{details}</p>
				<button className="buy-now-btn">Buy Now</button>
			</div>
		</div>
	);
};

export default ProductCard;
