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
import { addsignup,addGoogleUser } from "../../services/api";

import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from "jwt-decode";
// import { addGoogleUser } from "../services/api";
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

  // const handleSignup = async (e) => {
  //   e.preventDefault();
  //   await addsignup(signupdata);
  // };
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await addsignup(signupdata);

      // Check if the response contains an error message
      if (response.data && response.data.message) {
        setError(response.data.message);
        setSuccessMessage(null);
      } else {
        // Registration successful
        setSuccessMessage("User registered successfully.");
        setError(null);
      }
    } catch (error) {
      // Handle other errors (e.g., network issues)
      setError("Email already registered use a different email.");
      setSuccessMessage(null);
    }
  };
  const handleGoogleSignup = async (credentialResponse) => {
    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
    const email = credentialResponseDecoded.email;
    const name = credentialResponseDecoded.name;
    const googleObj ={
      name : name,
      email : email
    }

    console.log("Google Object:", googleObj);

    // await addGoogleUser(googleEmail, googlePicture, isGoogleAccount);
    console.log(name,email);
    const response = await addGoogleUser(googleObj);
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


              {/* google loginn */}
              {/* <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const credentialResponseDecoded=jwtDecode(credentialResponse.credential);
                  console.log(credentialResponseDecoded);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              /> */}

<GoogleLogin
          onSuccess={handleGoogleSignup}
          onError={() => {
            console.log("Login Failed");
          }}
        />

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
