import React, { useEffect, useState } from 'react'
import '../src/style.css'

// APIS 
const CAT_ENPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = ` `
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

function App() {
  const [fact, setFact] = useState('lorem ipsum cat fact whatever')
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        console.log(data)
        setFact(fact)

        // para una sola palabra
        const firstWord = fact.split(' ', 1)

        // para tres palabras
        // const firstWord = fact.split(' ').slice(0, 3).join(' ')

        console.log(firstWord)
        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            // const { url } = response
            // setImageUrl(url)

            console.log(response)
          })
      })
  }, [])


  return (
    <main>
      <h1>App de gatitos</h1>

      {/* renderizado condicional */}
      {fact && <p>{fact}</p>}
      
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extraxted using the first tree words for ${fact}`} />}
    </main>
  )
}

export default App