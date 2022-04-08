export interface ProductProps {
  _id: string
  name: string
  description: string
  picture: string
  price: number // O preço vem como valor inteiro. 1000 significa R$10,00
  stock: number
}
