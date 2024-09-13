const BASE_URL  =  "http://localhost:4000/api/v1"



export const authEndpoints = {
    LOGIN : BASE_URL +"/auth/login",
    SIGNUP : BASE_URL + "/auth/signup"
}
export const categoriesEndpoints = {
    CREATE_CATEGORY : BASE_URL + "/category/createcategory",
    GET_ALL_CATEGORY : BASE_URL + "/category/getallcategory",
    GET_CATEGORY_BY_ID : (id) =>  BASE_URL + `/category/getcategorybyid/${id}`,
    DELETE_CATEGORY_BY_ID : (id) => BASE_URL + `/category/deletecategorybyid/${id}`
}

export const productEndpoint = {
    GET_PRODUCT_BY_ID : (id) =>  BASE_URL + `/product/getproductbyid/${id}`,
    CREATE_PRODUCT : BASE_URL + '/product/createproduct',
    DELETE_PRODUCT_BY_ID : (id) => BASE_URL + `/product/deleteproductbyid/${id}`,
    GET_ALL_PRODUCT : BASE_URL + "/product/getallproduct"
}

export const subcategoryEndpoints = {
    CREATE_SUBCATEGORY : BASE_URL + "/subcategory/subcreatecategory",
    GET_ALL_SUBCATEGORY : BASE_URL + "/subcategory/getallsubcategory",
    GET_SUBCATEGORY_BY_ID : (id) =>  BASE_URL + `/subcategory/getsubcategorybyid/${id}`,
    DELETE_SUBCATEGORY_BY_ID : (id) => BASE_URL + `/subcategory/deletesubcategorybyid/${id}`
}

export const searchEndpoints = {
    SEARCH_ALL_PRODUCT : (query) => BASE_URL + `/search/searchall?q=${query}`
}