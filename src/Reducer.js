export const initialState={
    basket:[],
    user:null
}
export const getBasket =(basket)=>{
 const items = basket.map((item)=>item.price)
 console.log(items)
 const price = items.map((i)=>Number(i))


 let total =0;
 for(let i=0; i<price.length ; i++)
 {
     total =price[i]+total
 }
   return total;


} 

const reducer =(state,action)=>{
    switch(action.type){
        case "ADD_To_Basket":
            return {
                ...state,
                basket:[...state.basket,action.item],
            }
            case "Remove_From_Basket":
               const index = state.basket.findIndex(
                   (basketItem)=>basketItem.id === action.id
               );

               let newBasket =[...state.basket]

               if (index>=0)
               {
                   newBasket.splice(index,1);
               }
               else{
                   console.warn(`Cant Remove the product (id : ${action.id}) as it is not in basket`)
               }
               return{
                   ...state,
                   basket:newBasket
               }
               case "SET_USER":
                   return{
                       ...state,
                       user:action.user
                   }

                    case 'EMPTY_BASKET':

                    return{
                        ...state,
                        basket:[]
                    }


            default:
                return state;
    }

}

export default reducer;