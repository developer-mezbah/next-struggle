import Image from "next/image";
import "./Products.css";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

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
            <div key={item?._id} className="box relative h-auto group overflow-hidden">
              <Link
                href={`/product-details?product=${item?.title
                  .replace(/[^a-zA-Z0-9-.\s]/g, "")
                  .replace(/ /g, "-")}&id=${item?._id}`}
              >
                <Image
                  src={item?.thumnailImg}
                  width={500}
                  height={500}
                  alt=""
                />
                <div
                  className="absolute group-hover:top-0 top-[100%] left-0 right-0 bottom-0 h-full w-full flex justify-center items-center"
                  style={{
                    background: "rgba(0, 0, 0, 0.3)",
                    transition: "0.8s",
                  }}
                >
                  <button className="flex items-center text-4xl text-textLight font-bold hover:underline">
                    <span>Details</span>
                    <HiOutlineArrowRight />
                  </button>
                </div>
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
