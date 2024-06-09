import "./Features.css";
import ImagePhone from "../../assets/mobile-phone.png";
import ImageLightBulb from "../../assets/verification-sign.png";
import ImageSecurity from "../../assets/locked-padlock.png";

const Features = () => {
  return (
    <>
      <section className="features-section">
        <div>
          <img src={ImagePhone} alt="smartphone icon" />
          <h2>Accessibility</h2>
          <p>
            Access Your diary on the go from any device, ensuring seamless
            availability.
          </p>
        </div>

        <div>
          <img src={ImageLightBulb} alt="light bulb icon" />
          <h2>Simplicity</h2>
          <p>Capture your thoughts with ease in a user-friendly interface.</p>
        </div>

        <div>
          <img src={ImageSecurity} alt="pad lock icon" />
          <h2>Security</h2>
          <p>
            Keep your digital diary entries confidential with robust encryption.
          </p>
        </div>
      </section>
    </>
  );
};

export default Features;
