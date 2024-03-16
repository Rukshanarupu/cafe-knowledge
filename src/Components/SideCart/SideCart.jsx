import React from 'react';

const SideCart = ({data, readingTime, addBookmark, countBookmark, handleBookmark}) => {

    // console.log(bookmarkText)
    return (
        <div>
            <div className='p-4 bg-indigo-100 border-indigo-400 text-indigo-500 rounded-md mb-5'>
                <p>Spent time on read : {readingTime} min</p>
            </div>
            
            <div className='p-4 bg-slate-200 shadow-xl rounded-md'>
                <h2 className='font-bold text-3xl mb-4'>Bookmarked Blogs : {countBookmark}</h2>
                <div className='' >
                    {
                        addBookmark.length ?
                        addBookmark.map(data => 
                        <Bookmark 
                            title = {data.blogTitle} >
                        </Bookmark>)
                        :''
                    }
                </div>
            </div>
        </div>
    );
};

const Bookmark = ({title}) => {
    return ( 
        <div className = "bg-white rounded-md p-3 mb-5" >
            <p className = "text-bold" > {title} </p> 
        </div>
    );
};

export default SideCart;