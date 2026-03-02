import { useEffect, useRef } from "react";
import sponsor1 from "../assets/Sponsor/accelerating.png";
import sponsor2 from "../assets/Sponsor/deieo.png";
import sponsor3 from "../assets/Sponsor/ictDivision.png";
import sponsor4 from "../assets/Sponsor/worldBank.png";

const Sponsored = () => {
  const sponsorImages = [
    sponsor1,
    sponsor2,
    sponsor3,
    sponsor4,
  ];
  
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    
    let animationId;
    let position = 0;
    const speed = 0.6;
    
    const animate = () => {
      position -= speed;
      const itemWidth = marquee.scrollWidth / 2;
      if (Math.abs(position) >= itemWidth) {
        position = 0;
      }
      marquee.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-[#0B0C10] via-[#1F2833] to-[#0B0C10] py-10 md:py-16 relative overflow-hidden">
      
      
      <div className="mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
              Trusted By
            </span>
          </h2>
        </div>

        {/* Infinite Scroll Marquee */}
        <div className="relative overflow-hidden pb-4">          
          <div
            ref={marqueeRef}
            className="flex gap-16 md:gap-24"
            style={{ width: "max-content" }}
          >
            {/* First Set  */}
            {sponsorImages.map((img, i) => (
              <div
                key={`set1-${i}`}
                className="flex-shrink-0 flex items-center justify-center group"
              >
                <img
                  src={img}
                  alt={`Sponsor ${i + 1}`}
                  className="h-20 md:h-24 lg:h-28 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
            ))}
            
            {/* Duplicate Set */}
            {sponsorImages.map((img, i) => (
              <div
                key={`set2-${i}`}
                className="flex-shrink-0 flex items-center justify-center group"
              >
                <img
                  src={img}
                  alt={`Sponsor ${i + 1}`}
                  className="h-20 md:h-24 lg:h-28 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsored;