import React from "react";
import ProductCard from "../../components/Product/ProductCard";

const MobilePage = ({ data }) => {
 
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4 px-3">
      {Object.values(data).map((item, index) => (
        <ProductCard key={index} item={item} index={index}/>
      ))}
    </div>
  );
};

export default MobilePage;
