import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const clientsReview = [
        {
            _id: 1,
            name: "Winson Herry",
            location: "California",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1
        },
        {
            _id: 2,
            name: "Winson Herry",
            location: "California",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2
        },
        {
            _id: 3,
            name: "Winson Herry",
            location: "California",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3
        }
    ]

    return (
        <section className="lg:px-12 px-4 my-20">
            <div className="flex justify-between">
                <div>
                    <h4 className="text-xl font-bold uppercase text-primary">Testimonial</h4>
                    <h2 className="text-3xl text-accent">What Our Patients Says</h2>
                </div>
                <div>
                    <img className="w-24 lg:w-48" src={quote} alt="quote background" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {clientsReview.map(review => <Review
                    key={review._id}
                    name={review.name}
                    review={review.review}
                    image={review.img}
                    location={review.location}
                />)}
            </div>
        </section>
    );
};

export default Testimonial;