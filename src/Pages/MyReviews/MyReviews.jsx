import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import PageHeader from '../Shared/PageHeader/PageHeader';
import MyReviewCard from './MyReviewCard/MyReviewCard';

const MyReviews = () => {
    const [myReviews, setMyReviews] = useState([]);

    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/my-reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [myReviews])


    // ---> delete review
    const handleReviewDelete = (id) => {
        fetch(`http://localhost:5000/my-reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remainingUser = myReviews.filter(rv => rv._id !== id);
                    setMyReviews(remainingUser)
                }
            })
    }

    return (
        <>
            <PageHeader title={"My Reviews"} />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">

                    {
                        myReviews.length > 0 ?
                            <div className="flex flex-wrap -m-4 ">
                                {
                                    myReviews.map(myReVw => <MyReviewCard
                                        key={myReVw._id}
                                        myReVw={myReVw}
                                        handleReviewDelete={handleReviewDelete}
                                    />)
                                }
                            </div>
                            : <h2 className='text-3xl my-2'>You Have No Comments</h2>

                    }

                </div>
            </section>
        </>

    );
};

export default MyReviews;