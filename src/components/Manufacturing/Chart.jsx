import React from "react";
import "./Chart.css";
import Image from "next/image";

const Chart = () => {
  return (
    <div className="md:my-20 my-10 py-20 chart">
      <div className="wrapper">
        <div className="container lg:scale-125">
          <h1 className="level-1 rectangle">Order procument</h1>
          <ol className="level-2-wrapper">
            <li>
              <h2 className="level-2 rectangle">
                merchendising
                <Image
                  className="mx-auto pt-2"
                  src="/images/manufactur/step16.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </h2>
              <ol className="level-3-wrapper">
                <li>
                  <h3 className="level-3 rectangle">
                    design
                    <Image
                      className="mx-auto pt-2"
                      src="/images/manufactur/step4.png"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </h3>
                  <ol className="level-4-wrapper">
                    <li>
                      <h4 className="level-4 rectangle ">
                        raw sourcing
                        <Image
                          className="mx-auto pt-2"
                          src="/images/manufactur/step6.png"
                          width={100}
                          height={100}
                          alt=""
                        />
                      </h4>
                    </li>
                  </ol>
                </li>
                <li>
                  <h3 className="level-3 rectangle ">
                    sample section
                    <Image
                      className="mx-auto pt-2"
                      src="/images/manufactur/step8.png"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </h3>
                  <ol className="level-4-wrapper">
                    <li>
                      <h4 className="level-4 rectangle ">
                        production
                        <Image
                          className="mx-auto pt-2"
                          src="/images/manufactur/step14.png"
                          width={100}
                          height={100}
                          alt=""
                        />
                      </h4>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              <h2 className="level-2 rectangle">
                cutting
                <Image
                  className="mx-auto pt-2"
                  src="/images/manufactur/step5.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </h2>
              <ol className="level-3-wrapper">
                <li>
                  <h3 className="level-3 rectangle ">
                    sewing
                    <Image
                      className="mx-auto pt-2"
                      src="/images/manufactur/step3.png"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </h3>
                  {/* <ol className="level-4-wrapper">
                    <li>
                      <h4 className="level-4 rectangle">production </h4>
                    </li>
                  </ol> */}
                </li>
                <li>
                  <h3 className="level-3 rectangle ">
                    finish
                    <Image
                      className="mx-auto pt-2"
                      src="/images/manufactur/step11.png"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </h3>
                  <ol className="level-4-wrapper">
                    <li>
                      <h4 className="level-4 rectangle ">
                        shipping and storage
                        <Image
                          className="mx-auto pt-2"
                          src="/images/manufactur/step15.png"
                          width={100}
                          height={100}
                          alt=""
                        />
                      </h4>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Chart;
