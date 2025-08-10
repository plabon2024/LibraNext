import Banner from "@/components/sections/Banner";
import ProductCategory from "@/components/sections/ProductCategory";
import TrandingBooks from "@/components/sections/TrandingBooks";
import React from "react";

export default function page() {
  return (
    <div >
     <Banner></Banner>
     <ProductCategory></ProductCategory>
     <TrandingBooks></TrandingBooks>
    </div>
  );
}
