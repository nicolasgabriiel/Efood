export const getPriceInBRL = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getDescription = (descricao: string, tamanho: number) => {
  if (descricao.length > tamanho) {
    const novoTamanho = tamanho - 3
    return descricao.slice(0, novoTamanho) + '...'
  }
  return descricao
}
