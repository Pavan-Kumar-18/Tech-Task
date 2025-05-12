import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5002/api/videos')
      .then((res) => {
        setVideos(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="reel-container">
      {videos.map((video) => (
        <div className="reel" key={video.id}>
          <video controls src={video.videoUrl} />
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
