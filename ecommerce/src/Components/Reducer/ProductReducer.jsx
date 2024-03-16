import SingeProduct from "../SingeProduct"

const  ProductReducer=(state,action)=>{

    switch (action.type) {


        case "SET_ISLOADING":
            return{
                ...state,
                isloading:true
            }
        case "SET_API_DATA":
            const menproduct=action.payload.filter((curr,i)=>curr.category.startsWith("m"))
            const womenproduct=action.payload.filter((curr,i)=>curr.category.startsWith("w"))
            // console.log(womenProduct);
        return{
            ...state,
            isloading:false,
            allproduct:action.payload,
            menproduct:menproduct,
            womenproduct: womenproduct,
        }


        case "GET_USER_VALUE":
            const{value,name}=action.payload;
          //   console.log(name,value)

          return{
            ...state,
            filter:{
                ...state.filter,
                [name]:value
            }
          }

          case "SEARCH_PRODUCT":
            const{allproduct}=state
            
           
            const{text}=state.filter;
            let copyProduct=[...allproduct]
            let menSearch=[...state.menproduct];
           // console.log(menSearch)
           if(text){
            copyProduct=copyProduct.filter((curr,i)=>curr.title.toLowerCase().startsWith(text))
            menSearch=copyProduct.filter((curr,i)=>curr.title.toLowerCase().startsWith(text))
           // console.log(copyProduct)
           }
           return{
            ...state,
            allproduct:copyProduct,
            menproduct:menSearch,
           }

        case "SEARCHING_PRODUCT" :

                let searchProduct=state.allproduct.filter((curr,i)=>curr.title.includes(action.payload))
           // console.log(searchProduct);
           return{
            ...state,
            allproduct:searchProduct,
            menproduct:searchProduct,
            womenproduct:searchProduct,
           }

        case "SET_SINGLE_PAGE_ISLOADING":
            return{
                ...state,
                issinglepageloading:true,    
            }
            
            case "SET_DATA_IN_SINGLE_PAGE":
                return{
                    ...state,
                    singleproduct:action.payload,
                    issinglepageloading:false
                } 


                case "ADD_CART":
                     const{singleproduct,id,counter}=action.payload
                    // console.log(counter);

                     let sameitem=state.cartproduct.find((curr)=>curr.id===id)
                     //console.log(sameitem);

                     if(sameitem){

                        let update=state.cartproduct.map((curr)=>{
                            if(curr.id===id){
                                let updateprice=curr.price*counter
                               // console.log(update.price);
                                return{
                                    ...curr,
                                    price:updateprice
                                }
                            }else{
                                return curr;
                            }
                        })

                        return{
                            ...state,
                            cartproduct:update
                        }
                     }
                     
                     else{
                        const cartdetail={
                            id:id,
                            counter:counter,
                            price:singleproduct.price,
                            title:singleproduct.title,
                            image:singleproduct.image,
                        }
    
    
                         return{
                            ...state,
                            cartproduct:[...state.cartproduct,cartdetail],
                            price:cartdetail.price,
                            discount:cartdetail.price,
                            delivery:40,
                         }
                     }




                    

                     case "REMOVE_CART_ITEM":
                       const{removeid}=action.payload;
                       console.log(removeid);
                       const removecart=state.cartproduct.filter((curr)=>curr.id!==removeid);
                        return{
                         ...state,
                         cartproduct:removecart
                        }


                        case "INCREASE_CART":
                              // console.log(state.cartproduct)
                              // console.log(action.payload)

                               let updateamount=state.cartproduct.map((curr)=>{
                                if(curr.id===action.payload){
                                    let increaseCount=curr.counter+1
                                    return{
                                        ...curr,
                                        counter:increaseCount,
                                    }
                                }
                               })

                               return{
                                ...state,
                                cartproduct:updateamount
                               }

                               case "DECREASE_CART":

                               let updateamountminus=state.cartproduct.map((curr)=>{
                                if(curr.id===action.payload){
                                    let decreaseCount=curr.counter-1

                                     decreaseCount<=1 ? decreaseCount=1 :decreaseCount
                                    return{
                                        ...curr,
                                        counter:decreaseCount,
                                    }
                                }
                               })

                               return{
                                ...state,
                                cartproduct:updateamountminus
                               }

                               case "TOTAL_CART_VALUE":

                               let totalvalue=state.cartproduct.reduce((initialval,curr)=>{
                                  const{price,counter}=curr;
                                  initialval=initialval+price*counter
                                  return initialval 
                               },0)

                               return{
                                ...state,
                                totalprice:totalvalue,
                               }

                                  
                                // return{
                                //     ...state,
                                //     cartproduct:updateamount
                                // }
                           
                  
              
        default:
          return state;
    }

}

export default ProductReducer;