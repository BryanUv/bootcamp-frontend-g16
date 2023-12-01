import { useState } from "react"
import { useEffect } from "react"

export default function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    console.log('useeffect1: Se ejecuta la primera vez')

    const fechPokemons = async () => {
      const repose = await fetch('https://pokeapi.co/api/v2/pokemon')

      const data = await repose.json()

      setPokemons(data.results)
    }

    fechPokemons()
  }, [])

  return (
    <header className="w-1/2 m-auto">
      <h1 className="text-3xl font-bold underline">
        Poké catalog
      </h1>

      {/* <pre>{JSON.stringify(pokemons, null, 2)}</pre> */}

      {pokemons.map(pokemon => {
        const id = pokemon.url.split('/').at(-2)
        const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

        return (
          <article className="border rounded-lg bg-slate-100 m-2 flex flex-col items-center" key={pokemon.url}>
            <h3 className="font-bold text-center uppercase p-3">{pokemon.name}</h3>
            <img src={pokemonImage} className="w-40" />
          </article>
        )
      })}
    </header>
  )
}