import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GenericContext } from "../../Contexts/GenericProvider";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaShareAlt, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./BlogDetailPage.css";

export default function BlogDetailSimple() {
  const { slug } = useParams();
  const { dataMap, fetchData } = useContext(GenericContext);
  const navigate = useNavigate();

  const collectionName = "posts";
  const categoryId = "Precision Grow";
  const key = `${collectionName}_${categoryId}`;

  const [post, setPost] = useState(null);
  const [shareOpen, setShareOpen] = useState(false);

  // Fetch posts sorted by timestamp
  useEffect(() => {
    fetchData(collectionName, categoryId, false, "timestamp");
  }, [fetchData]);

  // Set current post
  useEffect(() => {
    if (dataMap[key]) {
      const allPosts = dataMap[key];
      const foundPost = allPosts.find((p) => p.id === slug);
      setPost(foundPost || null);
    }
  }, [dataMap, key, slug]);

  if (!dataMap[key]) return <p className="p-6">Loading posts...</p>;
  if (!post) return <p className="p-6 text-red-500">Blog not found</p>;

  const cleanHTMLContent = (html) =>
    html.replace(/<br\s*\/?>/g, "").replace(/<p>\s*<\/p>/g, "").trim();

  const shareMessage = `Read this amazing article: ${post.title}. Click to read the full post!`;

  return (
    <Container className="my-4 position-relative">
      <Helmet>
        <title>{post.title || "Blog Detail"}</title>
        <meta name="description" content={post.metaDescription || ""} />
        <meta property="og:title" content={post.title || ""} />
        <meta property="og:description" content={post.metaDescription || ""} />
        <meta property="og:image" content={post.imageURL || ""} />
        <meta property="og:type" content="article" />
      </Helmet>

      <h1 className="blog-title mt-3 mb-4">{post.title}</h1>

      {post.imageURL && (
        <img
          src={post.imageURL}
          alt={post.title}
          className="content-image mb-4 shadow"
          loading="lazy"
        />
      )}

      <p className="meta-info mb-3">
        Author: <strong>{post.authorName || "Unknown"}</strong> | Date:{" "}
        <strong>
          {post.timestamp
            ? new Date(post.timestamp.seconds * 1000).toLocaleDateString("en-GB")
            : "Unknown"}
        </strong>
      </p>

      <div
        className="blgcontent1 mb-5"
        dangerouslySetInnerHTML={{ __html: cleanHTMLContent(post.content) }}
      />

      <div className="d-flex justify-content-between align-items-center mt-4">
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="d-flex align-items-center">
          <div className={`social-icons ${shareOpen ? "open" : ""} me-2`}>
            <FacebookShareButton url={window.location.href} quote={shareMessage}>
              <FaFacebook className="share-icon fb" />
            </FacebookShareButton>
            <TwitterShareButton url={window.location.href} title={shareMessage}>
              <FaXTwitter className="share-icon twitter" />
            </TwitterShareButton>
            <LinkedinShareButton url={window.location.href} title={shareMessage} summary={post.metaDescription}>
              <FaLinkedin className="share-icon linkedin" />
            </LinkedinShareButton>
            <WhatsappShareButton url={window.location.href} title={shareMessage}>
              <FaWhatsapp className="share-icon whatsapp" />
            </WhatsappShareButton>
          </div>

          <button
            onClick={() => setShareOpen(!shareOpen)}
            className={`share-toggle-btn btn btn-primary`}
            title={shareOpen ? "Close Share Options" : "Share This Post"}
          >
            {shareOpen ? <FaTimes /> : <FaShareAlt />}
          </button>
        </div>
      </div>
    </Container>
  );
}
