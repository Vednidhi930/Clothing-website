import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios, { all } from "axios";
import reducer from "../Reducer/ProductReducer";
import { auth} from "../Firebase/Firebase";
import{onAuthStateChanged} from "firebase/auth";
import { json } from "react-router";
import { toast } from "react-toastify";



const ProductContext = createContext();

const url ="https://fakestoreapi.com/products"

const getlocalstoragedata=()=>{
  const getdata=localStorage.getItem("StyleSpotcart");
  
   if(getdata.length===0){
    return []
   }else{
    return JSON.parse(getdata);
   }
}

const initialState={
   isloading:false,
   issinglepageloading:false,
    allproduct:[],
    menproduct:[],
    womenproduct:[],
    singleproduct:{},
    cartproduct:getlocalstoragedata(),
    filter:{
      text:""
    },
    totalprice:"",
}


const ProductProvider = ({ children }) => {
    const[state,dispatch]=useReducer(reducer,initialState);
    const[userprofile,setUserprofile]=useState("")
    const[isAuthenticate,setIsauthenticate]=useState("");

  const getData = async(url) => {
      dispatch({type:"SET_ISLOADING"})
    try {
      const AllData = await axios.get(url);
     // console.log(AllData)
      const AllProduct=await AllData.data
      //console.log(AllProduct);
      dispatch({type:"SET_API_DATA",payload:AllProduct})
    } catch (error) {
       dispatch({type:"SET_ERROR"}) 
    }
   
  };


  const singlepage=async(url)=>{
      
    dispatch({type:"SET_SINGLE_PAGE_ISLOADING"})
    try {
      const alldata=await axios.get(url);
      const singlepagedata=await alldata.data;
    // console.log(singlepagedata)
      dispatch({type:"SET_DATA_IN_SINGLE_PAGE", payload:singlepagedata})
    } catch (error) {
      dispatch({type:"SET_ERROR"})
    }
  }


 // console.log(state.singleproduct);
  useEffect(() => {
    getData(url);
  },[state.filter]);

  //console.log(state.price);

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setIsauthenticate(user);
        setUserprofile(user.displayName)
      }else{
        setUserprofile("")
      }
    })
  },[])
    

  //console.log(userprofile);

  

  //console.log(state.allproduct)
  const handlecart=(id,singleproduct,counter)=>{
     dispatch({type:"ADD_CART",payload:{singleproduct,id,counter}})
     toast.success("Item Added Successfully")
  }

   const cartdelete=(removeid)=>{
     dispatch({type:"REMOVE_CART_ITEM",payload:{removeid}})
     toast.success("Item Deleted")
   }

   const handleplus=(id)=>{
    dispatch({type:"INCREASE_CART",payload:id})
    console.log(id)
   }

   //console.log(quantity);

   const handleminus=(id)=>{
    dispatch({type:"DECREASE_CART",payload:id })

   }

   useEffect(()=>{
      dispatch({type:"TOTAL_CART_VALUE"})
      localStorage.setItem("StyleSpotcart",JSON.stringify(state.cartproduct))
   },[state.cartproduct])


  //console.log(state.cartproduct);


   const SearchAllProduct=(e)=>{
      let value=e.target.value;
      let name =e.target.name
     // console.log(name,value)
      dispatch({type:"GET_USER_VALUE",payload:{value,name}})
   }

   useEffect(()=>{
      dispatch({type:"SEARCH_PRODUCT"})
   },[state.allproduct,state.filter])

  

  return (
    <ProductContext.Provider value={{...state,SearchAllProduct,singlepage,handlecart,cartdelete,handleplus,handleminus,userprofile,isAuthenticate}}>
        {children}
    </ProductContext.Provider>
  );
};

const Myprovider = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductProvider, Myprovider };
