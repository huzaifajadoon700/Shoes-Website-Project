import axios from "axios";

const url = "http://localhost:8000"




export const addsignup =async (signupdata)=>{
    console.log(signupdata);
 return await axios.post(`${url}/signup`,signupdata);
 }
 export const addcheckout =async (checkouttdata)=>{
  console.log(checkouttdata);
return await axios.post(`${url}/checkout`,checkouttdata);
}


// authorization
export const addproduct = async (productdata) => {
  console.log(productdata);
  const token = localStorage.getItem('authToken');
  return await axios.post(`${url}/shoes`, productdata, {
    headers: { 'auth-token': token },
  });
};

export const deleteShoe = async (productId) => {
  const token = localStorage.getItem('authToken');
  return await axios.delete(`${url}/viewproducts/${productId}`, {
    headers: { 'auth-token': token },
  });
};


export const getshoes = async (token) => {
  return await axios.get(`${url}/viewproducts`, {
    headers: { 'auth-token': token },
  });
};

export const addGoogleUser = async (googleObj) =>{
  console.log("Add google user : ",googleObj);
  axios.post(`${url}/google/signup`,googleObj);
}



// export const addproduct =async (productdata)=>{
//     console.log(productdata);
//  return await axios.post(`${url}/shoes`,productdata);
//  }

// export const getshoes= async ()=>{
// return await axios.get(`${url}/viewproducts`)
// }

// export const deleteShoe = async (productId) => {
//   return await axios.delete(`${url}/viewproducts/${productId}`);
// };
