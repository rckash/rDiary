import "./SignUp.css";
import ImageFeature from "../../assets/reading-side.svg";

const SignUp = () => {
  return (
    <>
      <section className="sign-up-section">
        <div>
          <h2>Sign Up</h2>
          <p>
            Express yourself freely. Create your free rDiary account and start
            writing!
          </p>

          <div className="sign-up-input">
            <div>
              <p>Email</p>
              <input
                type="text"
                placeholder="Enter your email"
                maxLength={100}
                required
              />
            </div>
            <div>
              <p>Password</p>
              <input
                type="password"
                placeholder="Minimum 8 characters"
                required
                maxLength={100}
                minLength={8}
              />
            </div>
            <button className="register-button">Sign Up</button>
          </div>
        </div>
        <div>
          <img src={ImageFeature} alt="a cartoon girl reading her diary" />
        </div>
      </section>
    </>
  );
};

export default SignUp;
