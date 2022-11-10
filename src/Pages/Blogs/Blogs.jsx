import React from 'react';
import useTitle from '../../hooks/useTitle';
import PageHeader from '../Shared/PageHeader/PageHeader';
import { useLoaderData } from 'react-router-dom';
import BlogCard from '../Shared/BlogCard/BlogCard';

const Blogs = () => {
    useTitle('Blogs');
    const blogs = useLoaderData();
    console.log(blogs)
    return (
        <>
            <PageHeader title={'Blogs'} />
            <div className='container mx-auto'>
                <div className="bg-white rounded-lg my-20">
                    {
                        blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)
                    }
                </div>
            </div>
        </>

    );
};

export default Blogs;