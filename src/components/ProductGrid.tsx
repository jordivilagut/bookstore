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
    imageUrl: "https://m.media-amazon.com/images/I/71XMTLtZd5L._AC_SL1500_.jpg",
    affiliateLink: "https://amazon.com/Apple-Watch-Series-9"
  },
  {
    id: 3,
    name: "Amazon Echo Show 10",
    price: "$249.99",
    description: "Smart display with motion tracking, 10.1\" HD screen, premium speakers, and Alexa built-in.",
    imageUrl: "https://m.media-amazon.com/images/I/51EVETDOOeL._AC_SL1000_.jpg",
    affiliateLink: "https://amazon.com/echo-show-10"
  },
  {
    id: 4,
    name: "Logitech G Pro X Superlight",
    price: "$159.99",
    description: "Ultra-lightweight wireless gaming mouse with HERO 25K sensor and up to 70-hour battery life.",
    imageUrl: "https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight/pro-x-superlight-black-gallery-1.png",
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
    imageUrl: "https://m.media-amazon.com/images/I/71CZUF4BGFL._AC_SL1500_.jpg",
    affiliateLink: "https://amazon.com/Keychron-K8-Pro-Mechanical-Keyboard"
  },
  {
    id: 7,
    name: "INIU 20000mAh Power Bank",
    price: "$45.99",
    description: "22.5W fast charging portable charger with USB-C input/output, LED display, and compatible with all smartphones.",
    imageUrl: "https://m.media-amazon.com/images/I/61dsg+cXVFL._AC_SL1500_.jpg",
    affiliateLink: "https://amazon.com/INIU-Portable-Charger-20000mAh"
  },
  {
    id: 8,
    name: "Sony WF-1000XM5 Wireless Earbuds",
    price: "$299.99",
    description: "True wireless earbuds with industry-leading noise cancellation and high-resolution audio.",
    imageUrl: "https://m.media-amazon.com/images/I/61nnZwz6WIL._AC_SL1500_.jpg",
    affiliateLink: "https://amazon.com/Sony-WF-1000XM5"
  },
  {
    id: 9,
    name: "Anker 565 USB-C Hub",
    price: "$79.99",
    description: "7-in-1 USB-C hub with 4K HDMI, USB 3.0, SD card reader, and 100W power delivery.",
    imageUrl: "https://m.media-amazon.com/images/I/71RqpU4-jYL._AC_SL1500_.jpg",
    affiliateLink: "https://amazon.com/Anker-565-USB-C-Hub"
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