import ProductCard from './ProductCard';
import './ProductGrid.css';

const mockProducts = [
  {
    id: 1,
    name: "Florence, la indòmita",
    price: "20.90€",
    description: "Novel·la històrica emocionant sobre un amor prohibit a la Figueres de 1899, entre Florence Hastings i el capità Fèlix Codina.",
    imageUrl: "https://imagessl6.casadellibro.com/a/l/t7/76/9788466430876.jpg",
    affiliateLink: "https://www.grup62.cat/llibre/florence-la-indomita/370953"
  },
  {
    id: 2,
    name: "Victorian Psycho",
    price: "19.90€",
    description: "Un thriller brillant i fosc de Virginia Feito. Una institutriu victoriana contractada pels Pounds amaga perversions i secrets a Ensor House.",
    imageUrl: "https://imagessl3.casadellibro.com/a/l/t7/43/9788466430043.jpg",
    affiliateLink: "https://www.grup62.cat/llibre/victorian-psycho/370935"
  },
  {
    id: 3,
    name: "El gat ens espera al marge",
    price: "18.50€",
    description: "Novel·la de Marc Vintró que retrata una crisi de parella en un futur pròxim de decadència ecològica.",
    imageUrl: "https://imagessl4.casadellibro.com/a/l/t7/74/9788417879674.jpg",
    affiliateLink: "https://www.grup62.cat/llibre/el-gat-ens-espera-al-marge/374158"
  },
  {
    id: 4,
    name: "El llibre daurat",
    price: "21.90€",
    description: "Lluís Llach presenta una novel·la que segueix un llibre secret custodiat des del segle XIII, reivindicant el paper de la dona en la tradició.",
    imageUrl: "https://imagessl5.casadellibro.com/a/l/t7/35/9788418735035.jpg",
    affiliateLink: "https://www.grup62.cat/llibre/el-llibre-daurat/375013"
  },
  {
    id: 5,
    name: "La passada a l'espai",
    price: "18.95€",
    description: "Obra imprescindible per als amants del futbol de Manel Vidal, cocreador de La Sotana, amb anàlisi detallada i anècdotes personals.",
    imageUrl: "https://imagessl0.casadellibro.com/a/l/t7/10/9788423362110.jpg",
    affiliateLink: "https://www.grup62.cat/llibre/la-passada-a-lespai/367874"
  },
  {
    id: 6,
    name: "Que morin els fills dels altres",
    price: "17.00€",
    description: "Amb una prosa magnètica, Roser Cabré-Verdiell narra la metamorfosi d'una dona que passa de ser mare poruga a assumir un coratge propi.",
    imageUrl: "https://malesherbes.cat/wp-content/uploads/2023/12/coberta_que_morin_els_fills_dels_altres-2.jpg",
    affiliateLink: "https://malesherbes.cat/llibre/que-morin-els-fills-dels-altres/"
  },
  {
    id: 7,
    name: "La dona del segle",
    price: "21.90€",
    description: "Toni Cruanyes ofereix una visió íntima dels canvis socials i culturals a Catalunya, rescatant la història de les dones de la seva família.",
    imageUrl: "https://imagessl7.casadellibro.com/a/l/t7/17/9788466431217.jpg",
    affiliateLink: "https://www.grup62.cat/llibre/la-dona-del-segle/371254"
  },
  {
    id: 8,
    name: "Poesia completa",
    price: "24.90€",
    description: "Obra completa d'Emily Dickinson, una de les més grans poetes d'Estats Units, amb els seus audaços experiments prosòdics i visió tràgica.",
    imageUrl: "https://www.edicions1984.cat/fitxers/1984/products/poesiacompleta.jpg",
    affiliateLink: "https://www.edicions1984.cat/cataleg/poesia-completa/"
  },
  {
    id: 9,
    name: "Palestina des de dins",
    price: "18.90€",
    description: "Llibre periodístic de Cristina Mas que combina geopolítica amb històries personals sobre el conflicte palestí, escrit sobre el terreny.",
    imageUrl: "https://www.arallibres.cat/wp-content/uploads/2023/12/Palestina-des-de-dins.jpg",
    affiliateLink: "https://www.grup62.cat/llibre/palestina-des-de-dins/365478"
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