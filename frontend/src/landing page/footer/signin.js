import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
function Signin() {
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Use useNavigate for redirection after successful login

  const handleChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/signin', signInData);

      // Save the token to local storage
      localStorage.setItem('authToken', response.data.token);

      // You can handle the response here, like storing user data in state/context
      console.log(response.data);

      setLoading(false);
      navigate('/admin'); // Redirect to the home page after successful login
    } catch (error) {
      console.error('Sign-in error:', error.response?.data?.message || 'An error occurred');
      setError('Invalid email or password');
      setLoading(false);
    }
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBInput
        wrapperClass='mb-4'
        label='Email address'
        id='form1'
        type='email'
        name='email'
        onChange={handleChange}
      />
      <MDBInput
        wrapperClass='mb-4'
        label='Password'
        id='form2'
        type='password'
        name='password'
        onChange={handleChange}
      />

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
        
      </div>
      <Link to="/signup" as="a" style={{textDecoration:"none",color:"black",marginLeft:"510px",marginBottom:"30px"}}>Sign Up</Link>
      <MDBBtn
        className="mb-4"
        onClick={handleSignIn}
        disabled={loading}
      >
        {loading ? 'Signing in...' : 'Sign in'}
      </MDBBtn>

      {error && <div className="text-danger mb-3">{error}</div>}
    </MDBContainer>
  );
}

export default Signin;





// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import {
//   MDBContainer,
//   MDBInput,
//   MDBCheckbox,
//   MDBBtn,
//   MDBIcon,
// } from 'mdb-react-ui-kit';
// import { Link } from "react-router-dom";

// function Signin() {
//   const [signInData, setSignInData] = useState({
//     email: '',
//     password: '',
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate(); // Use useNavigate for redirection after successful login

//   const handleChange = (e) => {
//     setSignInData({ ...signInData, [e.target.name]: e.target.value });
//   };

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await axios.post('http://localhost:8000/signin', signInData);

//       // You can handle the response here, like storing user data in state/context
//       console.log(response.data);

//       setLoading(false);
//       navigate('/admin'); // Redirect to the home page after successful login
//     } catch (error) {
//       console.error('Sign-in error:', error.response?.data?.message || 'An error occurred');
//       setError('Invalid email or password');
//       setLoading(false);
//     }
//   };

//   return (
//     <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
//       <MDBInput
//         wrapperClass='mb-4'
//         label='Email address'
//         id='form1'
//         type='email'
//         name='email'
//         onChange={handleChange}
//       />
//       <MDBInput
//         wrapperClass='mb-4'
//         label='Password'
//         id='form2'
//         type='password'
//         name='password'
//         onChange={handleChange}
//       />

//       <div className="d-flex justify-content-between mx-3 mb-4">
//         <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
//         <a href="!#">Forgot password?</a>
//       </div>

//       <MDBBtn
//         className="mb-4"
//         onClick={handleSignIn}
//         disabled={loading}
//       >
//         {loading ? 'Signing in...' : 'Sign in'}
//       </MDBBtn>

//       {error && <div className="text-danger mb-3">{error}</div>}

//       <div className="text-center">
//         <p>Not a member?   <Link to="/signup" as="a" style={{textDecoration:"none",margin:"4px"}}>Sign Up</Link></p>
        
//         <p>or sign up with:</p>

//         <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
//           {/* ... (existing code) */}
//         </div>
//       </div>
//     </MDBContainer>
//   );
// }

// export default Signin;
