import React from 'react'
import heart from "../Images/heart-regular.svg.svg";


const BlogItem = ({img, title, content, howOld, author}) => {
  return (
    <div className='display flex flex-row h-[210px] w-[760px]'>
        <div>
        <img src={img} alt='blog post' 
        className='rounded-3 object-cover w-[1000px] h-[200px] cursor-pointer'/>
        </div>
        <div className='flex flex-col justify-start'>
        <div className='flex flex-row pl-3 '>
        <h1 className='blog-title cursor-pointer'>{title}</h1>
        <img src={heart} alt="Heart Icon" width="25px" className="cursor-pointer pl-2"></img>
        </div>
        <p1 className="pl-3 blog-content">{content}</p1>
        <div className='flex flex-row gap-2 pl-3 pt-2'>
        <p3 className="blog-content"> {howOld} Day's Ago</p3>
        <p3 className="blog-author">{author}</p3>
        </div>
        </div>
    </div>
  )
}

export default BlogItem