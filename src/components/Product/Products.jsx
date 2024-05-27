import Image from "next/image";
import "./Products.css";

const Products = ({ data }) => {
  return (
    <div className="mt-10">
      <div className="products">
        {data.length > 0 ? (
          data?.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              key={item?._id}
              className="box"
            >
              <Image src={item?.img} width={800} height={500} alt="" />
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
