export const fetchPeliculas = async () => {
  const url = 'http://localhost:3000/peliculas'

  const reponse = await fetch(url) // por defecto esta usando el metodo GET

  const data = await reponse.json()

  return data
}
