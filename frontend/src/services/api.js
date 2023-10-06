import axios from "axios";

const url = "http://localhost:8000";



export const addproduct =async (productdata)=>{
    console.log(productdata);
 return await axios.post(`${url}/shoes`,productdata);
 }
export const addsignup =async (signupdata)=>{
    console.log(signupdata);
 return await axios.post(`${url}/signup`,signupdata);
 }
 export const addcheckout =async (checkouttdata)=>{
  console.log(checkouttdata);
return await axios.post(`${url}/checkout`,checkouttdata);
}



export const getshoes= async ()=>{
return await axios.get(`${url}/viewproducts`)
}

export const deleteShoe = async (productId) => {
  return await axios.delete(`${url}/viewproducts/${productId}`);
};






