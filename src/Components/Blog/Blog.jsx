import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleMarkRead, handleBookmark}) => {
    return (
        <div className='mb-5'>
            <img className='w-full rounded-lg mb-4' src={blog.poster} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-3 items-center'>
                    <img className='rounded-full w-14' src={blog.authorImage} alt="" />
                    <div className=''>
                        <h3 className='font-bold text-2xl'>{blog.authorName}</h3>
                        <p>{blog.publishDate}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <p>{blog.readTime} min read</p>
                    <button>
                        <FaBookmark onClick={()=>handleBookmark(blog)}/>
                    </button>
                </div>
            </div>
            <div>
                <h1 className='text-4xl font-bold my-4'>How to get your first job as a self-taught programmer</h1>
                <p><span>#beginners</span> <span>#programming</span></p>
                <button onClick={()=>handleMarkRead(blog.readTime)} class="my-3 underline text-blue-600 font-semibold text-xl">Mark as read</button>
                
            </div>
            <hr className='border-2'/>
        </div>
    );
};

export default Blog;