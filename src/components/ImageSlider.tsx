import { useState, useEffect } from 'react';

const images=[{image:"./../../public/background2.jpg",label: "Insightful Thinking", description:"Empowering smart decision through data and building the best software"},
{image:"./../../public/background1.jpg",label:"The future of merchandising has arrived", description:"Lower the cost of store execution at retail"},
{image:"./../../public/background3.webp",label: "Measure performance & react", description: "Increase  ROI by optimizing your investments"}]

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-slider">
      {images.map((item, index) => (
        <div key={index} className={`image-slide ${index === currentImageIndex ? 'active' : ''}`}>
           <span  className={`flex absolute flex-col justify-center items-center h-screen w-screen z-20 ${index === currentImageIndex ? 'animate-downToUp' : ''}`}>
            <p className='text-xxlg font-black'>
            {item.label}
            </p>
            <p className='text-md font-bold '>{item.description}</p>
           </span>
          <img
            src={item.image}
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
