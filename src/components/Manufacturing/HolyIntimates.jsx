import Image from "next/image";
import React from "react";

const HolyIntimates = () => {
  return (
    <>
      <div className="space-y-5 pt-14">
        <div className="wrapper">
          <div className="text-center mb-10">
            <Image
              className="inline"
              src="/images/holy-intimates.jpeg"
              width={400}
              height={200}
              alt=""
            />
          </div>
          <h4 className="leading-[48px] font-medium text-[32px] mt-10 text-black">
            Holy Intimates is a Bangladeshi Lingerie manufacturer. We have
            started the journey in 2023. The organization creates the most
            trendy and fashionable readymade garments and possesses the most
            complete and updated manufacturing system and machineries. Basically
            we are making Ladies Bra, Panty, Nighty, Tank top and Men’s Boxer &
            Vest. We ensure the best quality in needle point area. We export the
            quality lingerie to Africa, Canada, UAE etc. Factory capacity is
            about 1 lakh pcs in monthly basis.
          </h4>
        </div>
        <div className="bg-[#D9D9D9]">
          <div className="wrapper">
            <ul className="md:text-[28px] text-[22px] md:leading-[47px] leading-[37px] py-10">
              <li>Company Name: Holy Intimates.</li>
              <li>Established: 2023</li>
              <li>Company Type: Export Oriented Lingerie Manufacturer</li>
              <li>Certification: Under process</li>
              <li>
                Factory Distance: From Hazrat Shahjalal International Airport it
                will be only 21 km
              </li>
              <li>
                Manufacture Category: Infant, Children, Ladies and Men`s
                underwear
              </li>
              <li>Factory Area: 5200 square feet</li>
              <li>Production Line: 02</li>
              <li>Prresent Man power: 40</li>
              <li>Sewing Machine: 34 Set</li>
              <li>Machine Brand: Juki, Brother, Yamato, Sew power</li>
              <li>Moulding Machine: 05 sets</li>
              <li>Customer Profile: Zudio, Cherish London, Armam,</li>
              <li>Product: Bra, Panty, Brief, Boxer, Trunk, Swimwear-Shirt</li>
              <li>Production Capactiy: 100000 Pcs</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HolyIntimates;
