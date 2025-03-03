import axios from "axios";

const ProductsApi = (callback) => axios({
    method: 'get',
    url: 'https://fakestoreapi.com/products',

}).then((res)=> callback(res.data))

export default ProductsApi