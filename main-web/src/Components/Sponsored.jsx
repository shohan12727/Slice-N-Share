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
    const speed = 0.8; // Slightly faster for better flow

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
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)] pointer-events-none"></div>

      <div className="mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mb-6 rounded-full animate-pulse"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400">
              Trusted By
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Leading organizations that support our mission
          </p>
        </div>

        {/* Infinite Scroll Marquee */}
        <div
          className="relative overflow-hidden pb-4"
          style={{
            mask: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
            WebkitMask: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
          }}
        >
          <div
            ref={marqueeRef}
            className="flex gap-16 md:gap-24"
            style={{ width: "max-content" }}
          >
            {/* First Set */}
            {sponsorImages.map((img, i) => (
              <div
                key={`set1-${i}`}
                className="flex-shrink-0 flex items-center justify-center group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
                  <img
                    src={img}
                    alt={`Sponsor ${i + 1}`}
                    className="h-16 md:h-20 lg:h-24 w-auto object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </div>
            ))}

            {/* Duplicate Set */}
            {sponsorImages.map((img, i) => (
              <div
                key={`set2-${i}`}
                className="flex-shrink-0 flex items-center justify-center group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
                  <img
                    src={img}
                    alt={`Sponsor ${i + 1}`}
                    className="h-16 md:h-20 lg:h-24 w-auto object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsored;