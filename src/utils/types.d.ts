declare type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Menu[]
}
declare type Menu = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}
declare type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: string
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}
declare type Product = {
  id: number
  price: number
}
declare type PurchaseResponse = {
  orderId: string
}
