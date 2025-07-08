import React, { useState, useEffect } from 'react';

import { galleryImages, galleryCategories } from '../../public/galleryData';

const IMAGES_PER_PAGE = 9;

const categoryIcons = {
  All: '🌐',
  Rooms: '🛏️',
  Mess: '🍽️',
  Events: '🎉',
  Sports: '🏆',
  'Campus Views': '🌳',
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [page, setPage] = useState(1);
  const isAdmin = false; // Set to true to show upload button

  // Filter images by category
  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredImages.length / IMAGES_PER_PAGE);
  const paginatedImages = filteredImages.slice(
    (page - 1) * IMAGES_PER_PAGE,
    page * IMAGES_PER_PAGE
  );

  // Reset to page 1 when category changes
  useEffect(() => {
    setPage(1);
  }, [selectedCategory]);

  // Lightbox navigation (index relative to paginatedImages)
  const handleImageClick = idx => setLightboxIndex(idx);
  const handleCloseLightbox = () => setLightboxIndex(null);
  const handlePrev = () => setLightboxIndex(idx => (idx > 0 ? idx - 1 : idx));
  const handleNext = () => setLightboxIndex(idx => (idx < paginatedImages.length - 1 ? idx + 1 : idx));

  // Pagination controls
  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
    setLightboxIndex(null);
  };

  // Featured images for header carousel
  const featured = galleryImages.filter(img => img.featured);

  return (
    <>
      {/* Full-width header section */}
      <div className="w-full relative flex flex-col items-center justify-center mb-10 pt-12 pb-8 overflow-hidden min-h-[340px]">
        {/* Animated SVG Blob/Wave */}
        <svg className="absolute top-0 left-0 w-full h-full -z-10 animate-float" viewBox="0 0 1920 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="#e6eaff" d="M0,160 C400,320 800,0 1200,160 C1600,320 1920,0 1920,160 L1920,400 L0,400 Z">
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="M0,160 C400,320 800,0 1200,160 C1600,320 1920,0 1920,160 L1920,400 L0,400 Z;
                      M0,120 C500,300 800,40 1200,180 C1600,320 1800,20 1920,120 L1920,400 L0,400 Z;
                      M0,160 C400,320 800,0 1200,160 C1600,320 1920,0 1920,160 L1920,400 L0,400 Z" />
          </path>
        </svg>
        <h1 className="font-extrabold text-3xl md:text-5xl tracking-tight text-gray-900 drop-shadow-lg text-center max-w-2xl mx-auto mb-3 z-10">
          <span role="img" aria-label="camera" className="mr-2 align-middle">📸
            
          </span>
          Hostel Life in Pictures
        </h1>
        <p className="text-gray-700 text-lg md:text-2xl font-medium text-center max-w-xl mx-auto mb-8 tracking-wide z-10">
          Take a glimpse into student life at <span className="font-semibold text-indigo-700">NITK Hostel</span>.
        </p>
        <div className="flex justify-center gap-6 mt-2 flex-wrap z-10">
          {featured.map((img, idx) => (
            <img
              key={idx}
              src={img.url}
              alt={img.caption}
              className="w-32 h-24 md:w-40 md:h-28 object-cover rounded-xl shadow-xl border-4 border-white/60 opacity-0 animate-fadeInHeader transition-transform duration-200 hover:scale-105 hover:shadow-2xl bg-white"
              style={{ animationDelay: `${(idx + 1) * 180}ms`, animationFillMode: 'forwards' }}
            />
          ))}
        </div>
        <style>{`
          @keyframes fadeInHeader {
            to { opacity: 1; }
          }
          .animate-fadeInHeader {
            animation: fadeInHeader 0.8s cubic-bezier(.4,0,.2,1) forwards;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(20px); }
          }
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
        `}</style>
      </div>
      {/* Main content centered and padded */}
      <div className="px-2 md:px-6">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {galleryCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-lg transition-all duration-200 relative shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-blue-700 to-blue-400 text-white scale-105 ring-2 ring-blue-300'
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                }`}
              >
                <span className="text-xl">{categoryIcons[cat] || '📁'}</span>
                {cat}
                {selectedCategory === cat && (
                  <span className="absolute left-4 right-4 bottom-1 h-1 rounded bg-gradient-to-r from-white to-blue-300 transition-all duration-300" />
                )}
              </button>
            ))}
          </div>
        </div>
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {paginatedImages.map((img, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden bg-white shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-2xl animate-fadeInCard"
              onClick={() => handleImageClick(idx)}
            >
              <img
                src={img.url}
                alt={img.caption}
                loading="lazy"
                className="w-full h-52 object-cover block transition-transform duration-200"
              />
              {/* Heart icon overlay */}
              <span className="absolute top-3 right-4 text-2xl text-white opacity-90 drop-shadow-lg pointer-events-none select-none">
                ♥
              </span>
              {/* Caption glass overlay on hover */}
              <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-md text-blue-700 text-center text-base font-semibold py-3 opacity-0 hover:opacity-100 transition-opacity duration-200">
                {img.caption}
              </div>
              <style>{`
                @keyframes fadeInCard {
                  from { opacity: 0; transform: translateY(30px); }
                  to { opacity: 1; transform: none; }
                }
                .animate-fadeInCard {
                  animation: fadeInCard 0.7s ease forwards;
                }
              `}</style>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 md:gap-3 my-8">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className={`px-4 py-2 rounded-full font-semibold text-blue-700 bg-blue-100 shadow-md transition-all duration-200 hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 shadow-md border-2 ${
                  page === i + 1
                    ? 'bg-gradient-to-r from-blue-700 to-blue-400 text-white border-blue-500 scale-105'
                    : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-100'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              className={`px-4 py-2 rounded-full font-semibold text-blue-700 bg-blue-100 shadow-md transition-all duration-200 hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              Next
            </button>
          </div>
        )}
        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={handleCloseLightbox}
          >
            <div
              className="relative max-w-2xl w-[90vw] bg-transparent"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={paginatedImages[lightboxIndex].url}
                alt={paginatedImages[lightboxIndex].caption}
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="text-white text-center mt-4 text-lg font-semibold">
                {paginatedImages[lightboxIndex].caption}
              </div>
              {/* Close button */}
              <button
                onClick={handleCloseLightbox}
                className="absolute top-3 right-3 bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-black/80 transition-colors"
                aria-label="Close"
              >
                ×
              </button>
              {/* Arrows */}
              {lightboxIndex > 0 && (
                <button
                  onClick={() => setLightboxIndex(lightboxIndex - 1)}
                  className="absolute top-1/2 left-[-2.5rem] -translate-y-1/2 bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-black/80 transition-colors"
                  aria-label="Previous"
                >
                  ‹
                </button>
              )}
              {lightboxIndex < paginatedImages.length - 1 && (
                <button
                  onClick={() => setLightboxIndex(lightboxIndex + 1)}
                  className="absolute top-1/2 right-[-2.5rem] -translate-y-1/2 bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-black/80 transition-colors"
                  aria-label="Next"
                >
                  ›
                </button>
              )}
            </div>
          </div>
        )}
        {/* Upload (Admin Only) */}
        {isAdmin && (
          <div className="my-8 text-center">
            <button
              className="px-8 py-3 rounded-lg bg-blue-700 text-white font-bold text-lg shadow-lg hover:bg-blue-800 transition-colors"
            >
              Upload Image (Admin)
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
