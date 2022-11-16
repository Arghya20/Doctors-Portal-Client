import React from "react";

const Review = ({ review }) => {
  const { name, review: userReview, location, img } = review;
  return (
    <div className="card  shadow-xl">
      <div className="card-body">
        <p>{userReview}</p>
                <div className="flex items-center mt-4">
                        <div className="avatar mr-4">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                            </div>
                        </div>
                            <div>
                                <h5 className="text-lg">{name}</h5>
                                <h2>{location}</h2>
                            </div>
                </div>
      </div>
    </div>
  );
};

export default Review;
