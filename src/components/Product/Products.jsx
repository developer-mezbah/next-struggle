import Image from "next/image";
import "./Products.css";
import Link from "next/link";

const Products = ({ data }) => {
  return (
    <div className="mt-10">
      <div
        className="products"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {data.length > 0 ? (
          data?.map((item, index) => (
            <div key={item?._id} className="box">
              <Link href="/product-details">
                <Image src={item?.img} width={500} height={500} alt="" />
              </Link>
            </div>
          ))
        ) : (
          <h1 className="text-accent text-4xl w-full font-bold">
            There is no product in this category.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Products;
