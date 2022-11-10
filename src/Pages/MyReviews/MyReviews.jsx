import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import PageHeader from '../Shared/PageHeader/PageHeader';
import MyReviewCard from './MyReviewCard/MyReviewCard';

const MyReviews = () => {
    const [myReviews, setMyReviews] = useState([]);
    useTitle('My Reviews')

    const { user, logOut } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/my-reviews?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('petHealthCare')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json()
            })
            .then(data => {
                setMyReviews(data)
            })

    }, [])


    // ---> delete review
    const handleReviewDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // ---> delete user data
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

                // --->sweet alert (delete success msg)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
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
                            : <h2 className='text-3xl my-2'>No review added yet</h2>

                    }

                </div>
            </section>
        </>

    );
};

export default MyReviews;