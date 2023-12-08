// const API_URL = 'https://raw.githubusercontent.com/victorvzn/bootcamp-frontend-g16/main/semana11/dia02-react-router-invoice-app/public/invoices.json'
const API_URL = 'https://65728912d61ba6fcc0152a46.mockapi.io/api/v1'


export const fetchInvoices = async () => {
  // const url = `${API_URL}`
  const url = `${API_URL}/invoices`

  const response = await fetch(url)

  const data = response.json()

  return data
}

export const getInvoice = async (id) => {
  const url = `${API_URL}/invoices/${id}`

  const response = await fetch(url)

  const data = response.json()

  return data
}