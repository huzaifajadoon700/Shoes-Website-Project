import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { addsignup } from "../../services/api";


function Signup() {
  const [signupdata, setSignupData] = useState({
    Name: "",
    Email: "",
  Password: "",
    Phonenumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setSignupData({ ...signupdata, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    await addsignup(signupdata);
  };

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Your Name"
                  id="form1"
                  type="text"
                  name="name"
                  onChange={(e) => handleChange(e)}
                  className="w-100"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label="Your Email"
                  id="form2"
                  type="email"
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="phone me-3" size="lg" />
                <MDBInput
                  label="Your Phone Number"
                  id="form4"
                  type="tel"
                  name="phonenumber"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput
                  label="Password"
                  id="form3"
                  type="password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <MDBBtn
                className="mb-4"
                size="lg"
                onClick={handleSignup}
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </MDBBtn>

              {error && <div className="text-danger mb-3">{error}</div>}
              {successMessage && (
                <div className="text-success mb-3">{successMessage}</div>
              )}
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;

// import React, { useState } from 'react';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSignIn = async (e) => {
//     e.preventDefault();

//     // Your authentication logic goes here
//     try {
//       // Example: You might use Firebase authentication, an API call to your server, or any other authentication method
//       // For simplicity, we'll just log the email and password for now
//       console.log(`Sign In - Email: ${email}, Password: ${password}`);
//     } catch (error) {
//       setError('Invalid email or password. Please try again.');
//     }
//   };

//   return (
//     <div className="signin-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
//       <h2 style={{fontWeight:"bold",fontFamily: "YourChosenFont"}}>Sign In</h2>
//       {error && <div className="error-message">{error}</div>}
//       <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSignIn}>
//         <label>Email:</label>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label>Password:</label>
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;
