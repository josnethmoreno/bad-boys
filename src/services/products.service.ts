const url = 'http://localhost:3000/api/product'

const getProducts = async () => {
  const res = await fetch(url)
  if (!res.ok) { throw new Error('Failed to fetch data'); }
  return res.json()
}

const getProduct = async (id: number) => {
  const res = await fetch(url + id)
  if(!res.ok) { throw new Error('Failed to fetch data')}
  return res.json()
}

export interface ProductInterface {
  id:          string;
  name:        string;
  description: string;
  price:       number;
  styles:      Style[];
  sizes:       Size[];
  images:      ImageElement[];
  createdAt:   Date;
  updatedAt:   Date;
  slug:        string;
}

export interface ImageElement {
  image: ImageImage;
  id:    string;
}

export interface ImageImage {
  id:        string;
  alt:       string;
  filename:  string;
  mimeType:  string;
  filesize:  number;
  width:     number;
  height:    number;
  createdAt: Date;
  updatedAt: Date;
  url:       string;
}

export interface Size {
  size: string;
  id:   string;
}

export interface Style {
  style: string;
  id:    string;
}

export { getProducts, getProduct }