import React, { useState } from 'react';

const Project = () => {
  const [searchInput, setSearchInput] = useState("");
  const [videoId, setVideoId] = useState("EEnxRe73vQk");
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Extract video ID from various YouTube URL formats
    const extractedId = searchInput.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/)?.[1] || searchInput;
    setVideoId(extractedId);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Project Video</h2>
      
      {/* YouTube Search Bar */}
      <div style={styles.searchContainer}>
        <form onSubmit={handleSearch} style={styles.searchForm}>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Enter YouTube URL or Video ID"
            style={styles.searchInput}
          />
          <button type="submit" style={styles.searchButton}>
            Search
          </button>
        </form>
      </div>
      
      {/* Embedded YouTube Video */}
      <div style={styles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={styles.video}
        ></iframe>
      </div>
      
      {/* Direct Link */}
      <div style={styles.linkContainer}>
        <a 
          href={`https://www.youtube.com/watch?v=${videoId}`} 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.link}
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
};

// Styling (added search-related styles while keeping existing ones)
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    color: '#333',
    textAlign: 'center',
  },
  searchContainer: {
    margin: '20px 0',
    textAlign: 'center',
  },
  searchForm: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  searchInput: {
    padding: '10px',
    width: '60%',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  searchButton: {
    padding: '10px 20px',
    backgroundColor: '#ff0000',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  videoContainer: {
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
    overflow: 'hidden',
    margin: '20px 0',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  linkContainer: {
    textAlign: 'center',
    margin: '20px 0',
  },
  link: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#ff0000',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
};

export default Project;