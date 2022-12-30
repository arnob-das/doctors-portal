import React from 'react';

const Review = ({ name, image, location, review }) => {
    console.log(image.people1);
    return (
        <div className="card max-w-lg shadow-xl">
            <div className="card-body">
                <p>{review}</p>
                <div className="flex items-center my-3">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-3">
                            <img className="w-sm" src={image} alt="Client" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold">{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;