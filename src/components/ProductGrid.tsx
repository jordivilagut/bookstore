import ProductCard from './ProductCard';
import './ProductGrid.css';

const mockProducts = [
  {
    id: 1,
    name: "Sony WH-1000XM5 Wireless Headphones",
    price: "$399.99",
    description: "Industry-leading noise cancellation with auto optimization, crystal clear hands-free calling, and up to 30-hour battery life.",
    imageUrl: "https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SL1500_.jpg",
    affiliateLink: "https://amazon.com/Sony-WH-1000XM5-Headphones-Canceling-WH1000XM5/dp/B09XS7JWHH"
  },
  {
    id: 2,
    name: "Apple Watch Series 9",
    price: "$399.99",
    description: "Advanced smartwatch with health tracking, cellular connectivity, and the new Double Tap feature.",
    imageUrl: "https://m.media-amazon.com/images/I/71zr2kcPNUL._AC_SL1500_.jpg",
    affiliateLink: "https://amazon.com/Apple-Watch-Series-9"
  },
  {
    id: 3,
    name: "INIU 20000mAh Power Bank",
    price: "$49.99",
    description: "22.5W fast charging portable charger with USB-C input/output, LED display, and compatible with all smartphones.",
    imageUrl: "https://m.media-amazon.com/images/I/71VqqQ8LqcL._AC_SL1500_.jpg",
    affiliateLink: "https://amazon.com/INIU-Portable-Charger-20000mAh"
  },
  {
    id: 4,
    name: "Logitech G Pro X Superlight",
    price: "$159.99",
    description: "Ultra-lightweight wireless gaming mouse with HERO 25K sensor and up to 70-hour battery life.",
    imageUrl: "https://m.media-amazon.com/images/I/61WRvlYq4WL._AC_SL1500_.jpg",
    affiliateLink: "https://amazon.com/Logitech-Superlight-Wireless-Gaming-Mouse"
  },
  {
    id: 5,
    name: "Logitech Brio 4K Webcam",
    price: "$199.99",
    description: "Ultra HD webcam with HDR and Windows Hello support, perfect for streaming and video conferencing.",
    imageUrl: "https://m.media-amazon.com/images/I/61OQP2+yqML._AC_SL1500_.jpg",
    affiliateLink: "https://amazon.com/Logitech-Brio-Ultra-Webcam-Windows"
  },
  {
    id: 6,
    name: "Keychron K8 Pro Mechanical Keyboard",
    price: "$149.99",
    description: "Wireless mechanical keyboard with hot-swappable switches, RGB backlight, and Mac/Windows compatibility.",
    imageUrl: "https://m.media-amazon.com/images/I/71DwgZ6WBhL._AC_SL1500_.jpg",
    affiliateLink: "https://amazon.com/Keychron-K8-Pro-Mechanical-Keyboard"
  },
  {
    id: 7,
    name: "Smart Home Hub",
    price: "$89.99",
    description: "Central hub for controlling all your smart home devices with voice commands.",
    imageUrl: "https://via.placeholder.com/300",
    affiliateLink: "https://amazon.com/affiliate-link-7"
  },
  {
    id: 8,
    name: "Wireless Earbuds",
    price: "$159.99",
    description: "True wireless earbuds with active noise cancellation and wireless charging case.",
    imageUrl: "https://via.placeholder.com/300",
    affiliateLink: "https://amazon.com/affiliate-link-8"
  },
  {
    id: 9,
    name: "USB-C Hub",
    price: "$39.99",
    description: "7-in-1 USB-C hub with HDMI, USB 3.0, and power delivery.",
    imageUrl: "https://via.placeholder.com/300",
    affiliateLink: "https://amazon.com/affiliate-link-9"
  }
];

function ProductGrid() {
  return (
    <div className="product-grid">
      {mockProducts.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          imageUrl={product.imageUrl}
          affiliateLink={product.affiliateLink}
        />
      ))}
    </div>
  );
}

export default ProductGrid; 