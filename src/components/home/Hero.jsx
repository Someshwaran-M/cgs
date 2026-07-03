import { useState, useRef } from "react";
import "../../assets/css/Hero.css";
import video1 from "../../assets/videos/Home.mp4";
import video2 from "../../assets/videos/Home 1.mp4";

function Hero() {

const [active, setActive] = useState(1);

const videoRef1 = useRef(null);
const videoRef2 = useRef(null);

const handleEnd = () => {
setActive((prev) => (prev === 1 ? 2 : 1));
};

return (
  <section className="hero">
    ```
    {/* VIDEO 1 */}
    <video
      ref={videoRef1}
      className={`hero-video ${active === 1 ? "show" : "hide"}`}
      src={video1}
      autoPlay
      muted
      playsInline
      onEnded={handleEnd}
    />
    {/* VIDEO 2 */}
    <video
      ref={videoRef2}
      className={`hero-video ${active === 2 ? "show" : "hide"}`}
      src={video2}
      autoPlay
      muted
      playsInline
      onEnded={handleEnd}
    />
    <div className="hero-overlay"></div>
    <div className="hero-content">
      <h1>
        Transforming Ideas <span>Into Digital Reality</span>
      </h1>

      <p>
        We craft high-performance websites, dashboards, and digital products
        with modern UI/UX experiences.
      </p>

      <div className="hero-buttons">
        <button
          className="hero-btn primary"
          onClick={() => {
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get Started
        </button>

        <button
          className="hero-btn secondary"
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  </section>
);
}

export default Hero;
