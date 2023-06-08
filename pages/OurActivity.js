import React from 'react';
import Image from 'next/image';
import YouTubePlayer from '../components/YouTubePlayer';
import Footer from '@/components/Footer';

export default function OurActivity() {
  const videoId1 = 'MrbpUTl-j7k';
  const videoId2 = 'XEWYYxYxTdY';

  return (
    <div className="our-actions">
      <h1>Наша діяльність</h1>

      <div className="video-player">
        <YouTubePlayer videoId={videoId1} />
      </div>

      <div className="video-player">
        <YouTubePlayer videoId={videoId2} />
      </div>

      {/* ...Styling and other code... */}


      <div className="photos">
        <h2>Photos</h2>
        <div className="photo-grid">
          <div className="photo">
            <Image src="/gallery/gratitude.png" alt="Photo 1" width={200} height={200} />
          </div>
          <div className="photo">
            <Image src="/gallery/2.jpeg" alt="Photo 2" width={200} height={200} />
          </div>
          <div className="photo">
            <Image src="/gallery/1.jpeg" alt="Photo 2" width={200} height={200} />
          </div>
          <div className="photo">
            <Image src="/gallery/3.jpeg" alt="Photo 2" width={200} height={200} />
          </div>
          <div className="photo">
            <Image src="/gallery/4.jpeg" alt="Photo 2" width={200} height={200} />
          </div>
          <div className="photo">
            <Image src="/gallery/5.jpeg" alt="Photo 2" width={200} height={200} />
          </div>
          <div className="photo">
            <Image src="/gallery/6.jpeg" alt="Photo 2" width={200} height={200} />
          </div>
          <div className="photo">
            <Image src="/gallery/7.jpeg" alt="Photo 2" width={200} height={200} />
          </div>
          <div className="photo">
            <Image src="/gallery/8.jpeg" alt="Photo 2" width={200} height={200} />
          </div>
          <div className="photo">
            <Image src="/gallery/9.jpeg" alt="Photo 2" width={200} height={200} />
          </div>
          <div className="photo">
            <Image src="/gallery/10.jpeg" alt="Photo 2" width={200} height={200} />
          </div>
          <div className="photo">
            <Image src="/gallery/11.jpeg" alt="Photo 2" width={200} height={200} />
          </div>
          <div className="photo">
            <Image src="/gallery/12.jpeg" alt="Photo 2" width={200} height={200} />
          </div>
          <div className="photo">
            <Image src="/gallery/13.jpeg" alt="Photo 2" width={200} height={200} />
          </div>
          <div className="photo">
            <Image src="/gallery/14.jpeg" alt="Photo 2" width={200} height={200} />
          </div>
          <div className="photo">
            <Image src="/gallery/15.jpeg" alt="Photo 2" width={200} height={200} />
          </div>
          <div className="photo">
            <Image src="/gallery/16.jpeg" alt="Photo 2" width={200} height={200} />
          </div>
          {/* Add more photos as needed */}
        </div>
      </div>
      <Footer />

      <style jsx>{`
        .our-actions {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
        }

        .video-links {
          margin-bottom: 20px;
        }

        .video-links h2 {
          margin-bottom: 10px;
        }

        .video-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .video-links li {
          margin-bottom: 10px;
        }

        .photos {
          margin-bottom: 20px;
        }

        .photos h2 {
          margin-bottom: 10px;
        }

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .photo {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}
