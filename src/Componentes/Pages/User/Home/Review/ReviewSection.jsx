import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";


const ReviewSection = () => {

    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('/review.json')
        .then(res => res.json())
        .then(data => {
            setReview(data)

        })
    },[])
    console.log(review)
    return (
        <div className="max-w-7xl mx-auto space-y-10">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold">Latest User Review</h1>
                <p className="text-xl font-normal">Hear what our satisfied clients have to say about their experiences. Read the latest reviews and testimonials from our happy homeowners.</p>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center gap-8">
                {
                    review.map((item, index) => <ReviewCard key={index} item={item}></ReviewCard>)
                }
            </div>

        </div>
    );
};

export default ReviewSection;