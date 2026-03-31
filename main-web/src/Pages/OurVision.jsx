const OurVision = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_#0d1b2a_0%,_#050a10_70%)] text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold tracking-widest uppercase text-white drop-shadow-[0_0_30px_rgba(239,68,68,0.5)] mb-8">
          Our Vision
        </h1>
        <p className="text-xl leading-relaxed text-white/80 mb-12">
          At Slice N Share, we envision a world where gaming transcends boundaries, bringing players together in epic battles and unforgettable experiences. Our mission is to create a platform that fosters community, competition, and camaraderie among gamers worldwide.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Community</h3>
            <p className="text-white/70">Building the ultimate gaming community where players connect, compete, and share their passion.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Innovation</h3>
            <p className="text-white/70">Pushing the boundaries of gaming technology to deliver cutting-edge experiences.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-4 text-red-400">Excellence</h3>
            <p className="text-white/70">Striving for excellence in every tournament, event, and interaction we host.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;