import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../components/PrimaryButton";

const BottomBanner = () => {
  return (
    <div className="hero min-h-screen mt-10 lg:-mt-2">
      <div className="hero-content flex-col flex-col-reverse lg:flex-row-reverse gap-x-10">
        <div>
          <h1 className="text-5xl font-semibold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsumis that it has a
            more-or-less normal distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing packages and web
            page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
        <img src={treatment} className=" lg:w-1/3 rounded-lg shadow-2xl" alt="" />
      </div>
    </div>
  );
};

export default BottomBanner;
