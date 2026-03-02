import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import "aos/dist/aos.css";
import Aos from "aos";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 100,
    });
  }, []);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail />,
      title: "Email",
      value: "aishohan001@gmail.com",
      link: "mailto:aishohan001@gmail.com",
    },
    {
      icon: <Phone />,
      title: "Phone",
      value: "01887104758",
      link: "tel:+8801887104758",
    },
    {
      icon: <MapPin />,
      title: "Location",
      value: "Basundhara R/A, Dhaka",
      link: null,
    },
  ];

  return (
    <section className="relative py-16 px-4 md:px-8 min-h-screen overflow-hidden grid-bg">
      {/* optional animated glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.12),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div data-aos="fade-down" className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 
            bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 
            bg-clip-text text-transparent"
          >
            Contact Our Team
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ready to dominate the arena together? Send us a message and let's
            talk esports.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* FORM */}
          <div
            data-aos="fade-right"
            className="bg-[#0f1629]/80 backdrop-blur-xl 
            border border-cyan-500/20
            rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.08)]
            p-6 md:p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Send Message
            </h3>

            {isSubmitted && (
              <div
                className="mb-6 flex items-center gap-3 p-4 
                bg-green-500/10 
                border border-green-400/30 
                rounded-lg"
              >
                <CheckCircle className="text-green-400" />
                <span className="text-green-300 font-medium">
                  Message sent successfully!
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-300">
                  Gamer Tag / Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className={`w-full px-4 py-3 rounded-lg border 
                  bg-[#0b1220] text-white placeholder-gray-400
                  focus:ring-2 focus:outline-none transition
                  ${
                    errors.name
                      ? "border-red-500 focus:ring-red-400/40"
                      : "border-white/10 focus:ring-cyan-400/40"
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className={`w-full px-4 py-3 rounded-lg border 
                  bg-[#0b1220] text-white placeholder-gray-400
                  focus:ring-2 focus:outline-none transition
                  ${
                    errors.email
                      ? "border-red-500 focus:ring-red-400/40"
                      : "border-white/10 focus:ring-purple-400/40"
                  }`}
                  placeholder="Enter your email"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  rows="5"
                  {...register("message", { required: "Message is required" })}
                  className={`w-full px-4 py-3 rounded-lg border resize-none 
                  bg-[#0b1220] text-white placeholder-gray-400
                  focus:ring-2 focus:outline-none transition
                  ${
                    errors.message
                      ? "border-red-500 focus:ring-red-400/40"
                      : "border-white/10 focus:ring-orange-400/40"
                  }`}
                  placeholder="Tell us about your team or project..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2
                bg-gradient-to-r from-cyan-500 to-purple-600
                text-white py-3 rounded-lg 
                hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]
                transition-all duration-300 disabled:opacity-60"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* INFO + MAP */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-left"
                  className="flex items-center gap-4 
                  bg-[#0f1629]/80 backdrop-blur-xl
                  border border-purple-500/20
                  p-5 rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                >
                  <div
                    className="p-3 rounded-lg 
                    bg-gradient-to-br from-cyan-500 to-purple-600 
                    text-white shadow-lg"
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">
                      {item.title}
                    </p>
                    <p className="font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              data-aos="fade-left"
              className="h-[300px] md:h-[380px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,255,255,0.08)] border border-white/10"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.486151378437!2d90.42557207501255!3d23.82044028455374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7440f45c8ef%3A0x5b6df8a87b03a0f6!2sBasundhara%20R%2FA%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1767000000000!5m2!1sen!2sbd"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;