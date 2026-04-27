export const getProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  return res.json()
}


// export const getCategories = async () => {
//   const res = await fetch('https://dummyjson.com/products/categories')
//   return res.json()
// }


