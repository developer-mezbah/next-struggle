import Image from "next/image";
import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <div className="mt-10">
      <div className="products">
        <div className="box">
          <Image
            src="/images/products/img1.jpeg"
            width={800}
            height={500}
            alt=""
          />
        </div>
        <div className="box">
          <Image
            src="/images/products/img2.jpeg"
            width={800}
            height={500}
            alt=""
          />
        </div>
        <div className="box">
          <Image
            src="/images/products/img3.jpeg"
            width={800}
            height={500}
            alt=""
          />
        </div>
        <div className="box">
          <Image
            src="/images/products/img4.jpeg"
            width={800}
            height={500}
            alt=""
          />
        </div>
        <div className="box">
          <Image
            src="/images/products/img5.jpeg"
            width={800}
            height={500}
            alt=""
          />
        </div>
        <div className="box">
          <Image
            src="/images/products/img6.jpeg"
            width={800}
            height={500}
            alt=""
          />
        </div>
        <div className="box">
          <Image
            src="/images/products/img7.jpeg"
            width={800}
            height={500}
            alt=""
          />
        </div>
        <div className="box">
          <Image
            src="/images/products/img8.jpeg"
            width={800}
            height={500}
            alt=""
          />
        </div>
        <div className="box">
          <Image
            src="/images/products/img9.jpeg"
            width={800}
            height={500}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
