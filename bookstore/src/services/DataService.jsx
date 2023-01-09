import axios from 'axios'

const headerConfig = {
    headers : {
        Authorization : localStorage.getItem("token")

    }
}

export const getBookApi = () =>
{
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book',headerConfig)
    return response
}
export const addToCartApi = (data) =>
{
    let response = axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/{product_id}',data,headerConfig)
    return response
}
export const cartItemApi = (data) =>
{
    let response = axios.put('https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/{cartItem_id}',data,headerConfig)
    return response
}
export const addToWishlistApi = (data) =>
{
    let response = axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/{product_id}',data,headerConfig)
    return response
}