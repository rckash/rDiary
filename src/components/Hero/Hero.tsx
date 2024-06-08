import "./Hero.css";
import HeroImage from "../../assets/messy-doodle.svg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Discover Yourself With A Personalized Digital Diary</h1>
          <p>
            Write your story. Spark growth. This is your online space for
            self-discovery.
          </p>
          <button>Get Started Now</button>
        </div>
        <img src={HeroImage} alt="" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
