import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios, { all } from "axios";
import reducer from "../Reducer/ProductReducer";
import { auth} from "../Firebase/Firebase";
import{onAuthStateChanged} from "firebase/auth";



const ProductContext = createContext();

const url ="https://fakestoreapi.com/products"

const initialState={
   isloading:false,
   issinglepageloading:false,
    allproduct:[],
    menproduct:[],
    womenproduct:[],
    singleproduct:{},
    cartproduct:[],
    filter:{
      text:"",
    }
}


const ProductProvider = ({ children }) => {
    const[state,dispatch]=useReducer(reducer,initialState);
    const[counter,setCounter]=useState(1);
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

  
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setIsauthenticate(user);
        setUserprofile(user.displayName)
      }else{
        setUserprofile("")
      }
    })

  //console.log(userprofile);

  

  //console.log(state.allproduct)
  const handlecart=(id,singleproduct,counter)=>{
     dispatch({type:"ADD_CART",payload:{singleproduct,id,counter}})
  }

   const cartdelete=(removeid)=>{
     dispatch({type:"REMOVE_CART_ITEM",payload:{removeid}})
   }

   const handleplus=()=>{
    setCounter(counter+1)
   }

   //console.log(quantity);

   const handleminus=()=>{
    counter<=1 ?setCounter(1):setCounter(counter-1)
   }


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
    <ProductContext.Provider value={{...state,SearchAllProduct,singlepage,handlecart,cartdelete,handleplus,counter,handleminus,userprofile,isAuthenticate}}>
        {children}
    </ProductContext.Provider>
  );
};

const Myprovider = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductProvider, Myprovider };
