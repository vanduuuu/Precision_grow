import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BlogContext } from "./BlogProvider.js";  // Your context provider
import { Container, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import "./BlogDetailPage.css";

const BlogDetailPgs = () => {
  const { slug } = useParams(); // slug is post id
  const { posts, loading } = useContext(BlogContext);
  const [post, setPost] = useState(null);
  const [shareOpen, setShareOpen] = useState(false);

  useEffect(() => {
    if (!loading && posts.length > 0) {
      const foundPost = posts.find((p) => p.id === slug);
      setPost(foundPost || null);
    }
  }, [slug, posts, loading]);

  if (loading) return <h3 className="text-center">Loading...</h3>;
  if (!post) return <h3 className="text-center text-danger">Blog not found</h3>;

  // Clean HTML Content (optional)
  const cleanHTMLContent = (html) =>
    html.replace(/<br\s*\/?>/g, "").replace(/<p>\s*<\/p>/g, "").trim();

  const shareMessage = `Read this amazing article: ${post.title}. Click to read the full post!`;

  // Sort posts by date descending (newest first)
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = a.timestamp ? a.timestamp.seconds * 1000 : 0;
    const dateB = b.timestamp ? b.timestamp.seconds * 1000 : 0;
    return dateB - dateA;
  });

  // Find current post index
  const currentIndex = sortedPosts.findIndex((p) => p.id === slug);

  // Determine prev and next posts based on current index
  const prevPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;

  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>{post.title || "Blog Detail"}</title>
        <meta name="description" content={post.metaDescription || ""} />
        <meta property="og:title" content={post.title || ""} />
        <meta property="og:description" content={post.metaDescription || ""} />
        <meta property="og:image" content={post.imageURL || ""} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="blog-det-outer">
        <Container className="my-4">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb p-2">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          <p className="meta-info">
            Author - <strong>{post.authorName || "Unknown"}</strong> | Date -{" "}
            <strong>
              {post.timestamp
                ? new Date(post.timestamp.seconds * 1000).toLocaleDateString(
                    "en-GB"
                  )
                : "Unknown"}
            </strong>
          </p>

          <h1 className="blog-title mt-3 mb-4">{post.title}</h1>

          {post.imageURL && (
            <img
              src={post.imageURL}
              alt={post.title}
              className="content-image mb-5 shadow"
              loading="lazy"
            />
          )}

          <div className="blgcontent1"
            dangerouslySetInnerHTML={{ __html: cleanHTMLContent(post.content) }}
          />

      {/* Navigation & Share Row */}
<div className="action-row mt-5 d-flex justify-content-between align-items-center">
  {/* Prev & Next in one line */}
  <div className="d-flex align-items-center">
    {prevPost ? (
      <Link to={`/post/${prevPost.id}`} title={prevPost.title}>
        <Button variant="secondary" className="p-1 me-2">←</Button>
      </Link>
    ) : (
      <Button variant="secondary" className="p-1 me-2" disabled>No Previous</Button>
    )}
    
    {nextPost ? (
      <Link to={`/post/${nextPost.id}`} title={nextPost.title}>
        <Button variant="primary" className="p-1">→</Button>
      </Link>
    ) : (
      <Button variant="primary" className="p-1" disabled>No Next</Button>
    )}
  </div>

  {/* Share Buttons */}
  <div className="d-flex align-items-center">
    <div className={`social-icons ${shareOpen ? "open" : ""}`}>
      <FacebookShareButton url={window.location.href} quote={shareMessage}>
        <i className="fab fa-facebook share-icon fb"></i>
      </FacebookShareButton>
      <TwitterShareButton url={window.location.href} title={shareMessage}>
        <i className="fab fa-twitter share-icon twitter"></i>
      </TwitterShareButton>
      <LinkedinShareButton url={window.location.href} title={shareMessage} summary={post.metaDescription}>
        <i className="fab fa-linkedin share-icon linkedin"></i>
      </LinkedinShareButton>
      <WhatsappShareButton url={window.location.href} title={shareMessage}>
        <i className="fab fa-whatsapp share-icon whatsapp"></i>
      </WhatsappShareButton>
    </div>

    <button
      onClick={() => setShareOpen(!shareOpen)}
      className={`share-toggle-btn ms-3 ${shareOpen ? "bg-red" : "bg-blue"}`}
      title={shareOpen ? "Close Share Options" : "Share This Post"}
    >
      <i className={shareOpen ? "fas fa-times" : "fas fa-share-alt"}></i>
    </button>
  </div>
</div>

     
        </Container>
      </div>
    </>
  );
};

export default BlogDetailPgs;
