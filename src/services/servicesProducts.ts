const url = 'http://localhost:3000/api/product'

const getProducts = async () => {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  return res.json()
}

const getProduct = async (id: number) => {
  const res = await fetch(url + id)
  if(!res.ok) { throw new Error('Failed to fetch data')}

  return res.json()
}

export { getProducts, getProduct }