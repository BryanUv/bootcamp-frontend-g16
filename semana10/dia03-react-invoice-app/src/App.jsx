import { useEffect, useState } from "react"
import { fetchInvoices } from "./services/invoices"
import Invoices from "./pages/Invoices"

// Prop drilling

export default function App() {
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    // console.log('Me ejecuto la primera vez');
    
    fetchInvoices()
      .then((invoices) => setInvoices(invoices))
  }, [])

  return (
    <>
      <Invoices invoices={invoices} />
    </>
  )
}