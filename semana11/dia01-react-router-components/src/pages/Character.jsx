import { useParams } from "react-router-dom"

const Character = () => {
  const {id} = useParams()

  return (
    <div>Character Detail {id}</div>
  )
}

export default Character