import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import SideCart from '../SideCart/SideCart';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    // {blogs, handleMarkRead, handleBookmark}
  const [blogs, setBlogs]=useState([])

  // Loading Data
  useEffect(()=>{
      fetch('./data.json')
      .then(res=>res.json())
      .then(data=>setBlogs(data))
  },[])
  
  // Spent reading time
  const [readingTime, setReadingTime]=useState(0)
  const handleMarkRead=(time)=>{
    const newReadingTime=readingTime+time
    setReadingTime(newReadingTime)
  }

  const [countBookmark, setCountBookmark] = useState(0);
  const [addBookmark, setBookmark]=useState([])

  const handleBookmark=(bookmark)=>{
    const addedBookmark = addBookmark ?.find(data => data.id === bookmark.id);
    if (addedBookmark) {
      toast.success("You have already Bookmarked in this Blog!")
    }
    const newBookmarkArray = [...addBookmark, bookmark];
    setBookmark(newBookmarkArray);
    setCountBookmark(countBookmark + 1)
  }

    return (
        <div className="md:flex gap-4 sm:m-3">
            <div className="md:w-2/3 lg:w-2/3 w-full">
                {
                    blogs.map(blog=>( 
                        <Blog
                            handleBookmark={handleBookmark}
                            handleMarkRead={handleMarkRead}
                            blog={blog}
                        ></Blog>
                    ))
                }
            </div>
            <div className="md:w-1/3 lg:w-1/3 w-full">
                <SideCart 
                    readingTime={readingTime} 
                    addBookmark={addBookmark} 
                    countBookmark={countBookmark} 
                    handleBookmark={handleBookmark}>
                </SideCart>
                
            </div>


            
        </div>

    );
};

export default Home;