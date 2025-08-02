import React, { useEffect, useState } from "react";
import CommonSection from "../Shared/CommonSection";
import "../styles/Tour.css";
import Newsletter from "../Shared/Newsletter";
import { Container, Row, Col, Alert } from "reactstrap";
import BlogCard from "../Shared/BlogCard";
import axios from "axios";
import { BASE_URL } from "../utils/config";
import { getFallbackImage } from "../utils/imageUtils";
import mockBlogs from "../mockData/blogs";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingMockData, setUsingMockData] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Try to fetch from the API first
        const response = await axios.get(`${BASE_URL}/blogs`, { 
          timeout: 3000,
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        });
        
        if (response.data && Array.isArray(response.data)) {
          // Ensure each blog has required fields with proper fallbacks
          const validatedBlogs = response.data.map(blog => {
            // Handle missing or invalid photo URLs
            let photoUrl = blog.photo;
            try {
              if (!photoUrl || typeof photoUrl !== 'string') {
                throw new Error('Invalid photo URL');
              }
              new URL(photoUrl); // Will throw if not a valid URL
            } catch (e) {
              console.warn('Invalid blog image URL, using fallback:', blog.photo);
              photoUrl = getFallbackImage('blog');
            }

            return {
              _id: blog._id || `blog-${Math.random().toString(36).substr(2, 9)}`,
              title: blog.title || 'Untitled Blog Post',
              description: blog.description || 'No description available.',
              photo: photoUrl,
              author: blog.author || 'Travel World Team',
              createdAt: blog.createdAt || new Date().toISOString(),
              featured: blog.featured || false,
              comments: Array.isArray(blog.comments) ? blog.comments : []
            };
          });
          
          setBlogs(validatedBlogs);
          setUsingMockData(false);
        } else {
          throw new Error('Invalid data format from server');
        }
      } catch (error) {
        console.warn("Using mock data as fallback due to:", error.message);
        // Ensure mock data has all required fields with proper fallbacks
        const validatedMockBlogs = mockBlogs.map(blog => {
          // Ensure photo URLs are valid
          let photoUrl = blog.photo;
          try {
            if (!photoUrl || typeof photoUrl !== 'string') {
              throw new Error('Invalid photo URL');
            }
            new URL(photoUrl); // Will throw if not a valid URL
          } catch (e) {
            console.warn('Invalid mock blog image URL, using fallback:', blog.photo);
            photoUrl = getFallbackImage('blog');
          }

          return {
            ...blog,
            photo: photoUrl,
            comments: [], // Ensure comments array exists
            _id: blog._id || `mock-blog-${Math.random().toString(36).substr(2, 9)}`,
            createdAt: blog.createdAt || new Date().toISOString()
          };
        });
        setBlogs(validatedMockBlogs);
        setUsingMockData(true);
        setError('Using offline data. Some features may be limited.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <div className="loading-text">Loading travel stories...</div>
      </div>
    );
  }

  return (
    <div>
      <CommonSection title={"Travel Stories & Guides"} />
      <section className="mt-4">
        {error && (
          <Container>
            <Row>
              <Col lg="12">
                <Alert color="warning" className="mb-4">
                  <i className="ri-information-line me-2"></i>
                  {error}
                </Alert>
              </Col>
            </Row>
          </Container>
        )}
        
        {!loading && blogs.length === 0 ? (
          <Container>
            <Row>
              <Col lg="12" className="text-center py-5">
                <h4>No blog posts found</h4>
                <p>Check back soon for new travel stories and guides!</p>
              </Col>
            </Row>
          </Container>
        ) : (
          <Container>
            <Row>
              {loading ? (
                <div className="loader-container">
                  <div className="loader" />
                  <div className="loading-text">Loading...</div>
                </div>
              ) : (
                Array.isArray(blogs) && blogs.length > 0 ? (
                  blogs.map((blog) => (
                    <Col lg="4" md="6" sm="6" className="mb-4" key={blog._id}>
                      <BlogCard blog={blog} />
                    </Col>
                  ))
                ) : (
                  <Col lg="12" className="text-center py-5">
                    <h4>No blog posts available</h4>
                    <p>We couldn't find any blog posts to display.</p>
                  </Col>
                )
              )}
            </Row>
          </Container>
        )}
      </section>
      <Newsletter />
    </div>
  );
};

export default Blogs;
