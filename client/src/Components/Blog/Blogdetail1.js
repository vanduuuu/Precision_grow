import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { GenericContext } from "../../Contexts/GenericProvider";
import { Container, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaShareAlt,
  FaTimes,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./BlogDetailPage.css";

export default function BlogDetailPgs1() {
  const { slug } = useParams();
  const { dataMap, fetchData } = useContext(GenericContext);

  const collectionName = "posts";
  const categoryId = "Precision Grow"; // ensure same as used in GenericProvider
  const key = `${collectionName}_${categoryId}`;

  const [post, setPost] = useState(null);
  const [shareOpen, setShareOpen] = useState(false);

  // Fetch data on mount
  useEffect(() => {
    const unsubscribe = fetchData(collectionName, categoryId, 50);
    return () => unsubscribe && unsubscribe();
  }, [fetchData]);

  // Set specific post after data is loaded
  useEffect(() => {
    if (dataMap[key] && dataMap[key].length > 0) {
      const foundPost = dataMap[key].find((p) => p.id === slug);
      setPost(foundPost || null);
    }
  }, [dataMap, key, slug]);

  if (!dataMap[key]) return <p className="p-6">Loading posts...</p>;
  if (!post) return <p className="p-6 text-red-500">Blog not found</p>;

  // Clean HTML content if needed
  const cleanHTMLContent = (html) =>
    html.replace(/<br\s*\/?>/g, "").replace(/<p>\s*<\/p>/g, "").trim();

  const shareMessage = `Read this amazing article: ${post.title}. Click to read the full post!`;

  // Sort posts by date descending
  const sortedPosts = [...dataMap[key]].sort((a, b) => {
    const dateA = a.timestamp ? a.timestamp.seconds * 1000 : 0;
    const dateB = b.timestamp ? b.timestamp.seconds * 1000 : 0;
    return dateB - dateA;
  });

  const currentIndex = sortedPosts.findIndex((p) => p.id === slug);
  const prevPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;

  return (
    <>
      {/* SEO */}
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
                <Link to="/blogs">Blog</Link>
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

          <div
            className="blgcontent1"
            dangerouslySetInnerHTML={{ __html: cleanHTMLContent(post.content) }}
          />

          {/* Navigation & Share Row */}
          <div className="action-row mt-5 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              {prevPost ? (
                <Link to={`/post/${prevPost.id}`} title={prevPost.title}>
                  <Button variant="secondary" className="p-1 me-2">
                    ←
                  </Button>
                </Link>
              ) : (
                <Button variant="secondary" className="p-1 me-2" disabled>
                  No Previous
                </Button>
              )}

              {nextPost ? (
                <Link to={`/post/${nextPost.id}`} title={nextPost.title}>
                  <Button variant="primary" className="p-1">
                    →
                  </Button>
                </Link>
              ) : (
                <Button variant="primary" className="p-1" disabled>
                  No Next
                </Button>
              )}
            </div>

            <div className="d-flex align-items-center">
              <div className={`social-icons ${shareOpen ? "open" : ""}`}>
                <FacebookShareButton url={window.location.href} quote={shareMessage}>
                  <FaFacebook className="share-icon fb" />
                </FacebookShareButton>
                <TwitterShareButton url={window.location.href} title={shareMessage}>
                  <FaXTwitter className="share-icon twitter" />
                </TwitterShareButton>
                <LinkedinShareButton
                  url={window.location.href}
                  title={shareMessage}
                  summary={post.metaDescription}
                >
                  <FaLinkedin className="share-icon linkedin" />
                </LinkedinShareButton>
                <WhatsappShareButton url={window.location.href} title={shareMessage}>
                  <FaWhatsapp className="share-icon whatsapp" />
                </WhatsappShareButton>
              </div>

              <button
                onClick={() => setShareOpen(!shareOpen)}
                className={`share-toggle-btn ms-3 ${shareOpen ? "bg-red" : "bg-blue"}`}
                title={shareOpen ? "Close Share Options" : "Share This Post"}
              >
                {shareOpen ? <FaTimes /> : <FaShareAlt />}
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
