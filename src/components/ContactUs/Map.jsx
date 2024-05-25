import React from "react";

const Map = () => {
  return (
    <div className="bg-accent py-20">
      <div className="wrapper">
        <div className="rounded-[50px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.163828369177!2d90.35463627589846!3d23.812772686377812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0df8d5f9dbd%3A0x1b606535d3012803!2sStruggleWEB!5e0!3m2!1sen!2sbd!4v1716464940095!5m2!1sen!2sbd"
          width="100%"
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
      </div>
    </div>
  );
};

export default Map;
