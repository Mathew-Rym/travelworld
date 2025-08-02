import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./Blogcard.css";
import { getFallbackImage, handleImageError } from "../utils/imageUtils";

const BlogCard = ({ blog = {} }) => {
  // Provide default values for all required properties
  const { 
    _id = `blog-${Math.random().toString(36).substr(2, 9)}`,
    title = 'Blog Post',
    author = 'Travel World Team',
    date = new Date().toISOString(),
    photo = getFallbackImage('blog'),
    comments = []
  } = blog || {};

  const commentCount = Array.isArray(comments) ? comments.length : 0;
  let formattedDate = 'Recent';
  
  try {
    formattedDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    console.error('Error formatting date:', error);
  }



  return (
    <div className="blog__card">
      <Card>
        <Link to={`/blogs/${_id}`}>
          <div className="blog__img">
            <img 
              src={photo || getFallbackImage('blog')}
              alt={title || 'Travel World Blog'}
              onError={(e) => handleImageError(e, 'blog')}
              loading="lazy"
              className="blog-image"
            />
          </div>
        </Link>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="blog__author d-flex align-items-center gap-1" title={author}>
              <i className="ri-user-line"></i>
              {author.length > 20 ? `${author.substring(0, 20)}...` : author}
            </span>
            <span className="blog__date d-flex align-items-center gap-1">
              <i className="ri-calendar-line"></i>
              {formattedDate || 'Recent'}
            </span>
          </div>

          <h5 className="blog__title">
            <Link to={`/blogs/${_id}`}>
              {title}
            </Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <div className="comment-count">
              <i className="ri-chat-3-line"></i> {commentCount} {commentCount === 1 ? 'Comment' : 'Comments'}
            </div>
            <Link to={`/blogs/${_id}`} className="btn booking__btn">
              Read More
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default BlogCard;
