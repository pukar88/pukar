import React from 'react';

const Project = () => {
  const youtubeUrl = "https://www.youtube.com/watch?v=EEnxRe73vQk";
  const videoId = youtubeUrl.split('v=')[1]; // Extract video ID from URL
  
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Project Video</h2>
      
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
          href={youtubeUrl} 
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

// Styling
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
  videoContainer: {
    position: 'relative',
    paddingBottom: '56.25%', // 16:9 aspect ratio
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