import './ProductCard.css';

interface ProductCardProps {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  affiliateLink: string;
}

const ProductCard = ({ name, price, description, imageUrl, affiliateLink }: ProductCardProps) => {
  return (
    <div className="product-card">
      <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="product-link">
        <div className="product-image-container">
          <img src={imageUrl} alt={name} className="product-image" />
        </div>
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <p className="product-price">{price}</p>
          <p className="product-description">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default ProductCard; 