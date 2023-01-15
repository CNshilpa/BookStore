import axios from 'axios'

const headerConfig = {
    headers : {
       'x-access-token' : localStorage.getItem("token")

    }
}

export const getBookApi = () =>
{
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book',headerConfig)
    return response
}
export const addToCartApi = (data) =>
{
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${data.product_id}`,data,headerConfig)
    return response
}
export const cartItemListApi = () =>
{
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items', headerConfig)
    return response
}
export const addToWishlistApi = (data) =>
{
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${data.product_id}`,data,headerConfig)
    return response
}
export const UpdateCartApi = (data,input) => {
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${data}`,input, headerConfig)
    return response
} 
export const putAddress = (id) => {
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user`, id, headerConfig)
    return response
    
}

export const addToOrder = (inputobj) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order`, inputobj, headerConfig)
    return response
  
}
export const RemoveBookFromCart = (id) => {
    let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${id}`, headerConfig);
    return response;
    
}
