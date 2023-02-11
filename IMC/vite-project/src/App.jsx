import { useState } from "react"

//CSS
import "./app.css"

function App() {

  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [mensagem, setMensage] = useState("")

  const handleCalcul = ()=>{

    const alt = height/100
    const imc = weight /(alt * alt)

    if(imc < 18.6){

      setMensage(`Você está abaixo do peso! Seu IMC: ${imc.toFixed(2)}`)
      setHeight("")
      setWeight("")
    }else if (imc >= 18.6 && imc < 24.9){

      setMensage(`Peso ideal! Seu IMC: ${imc.toFixed(2)}`)
      setHeight("")
      setWeight("")
    }else if(imc >= 24.9 && imc < 34.9){
      setMensage(`Você está levemente acima do peso! Seu IMC: ${imc.toFixed(2)}`)
      setHeight("")
      setWeight("")

    }else if(imc > 34.9){
      setMensage(`Cuidado Obesidade! Seu IMC: ${imc.toFixed(2)}`)
      setHeight("")
      setWeight("")
    }

  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular o seu IMC</span>

      <div className="area-input">
        <input
        type="text" 
        placeholder="Peso em (Kg) Ex: 90"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}/>

        <input
        type="text" 
        placeholder="Altura em (cm) Ex: 180"
        value={height}
        onChange={(e)=> setHeight(e.target.value)}/>

        <button onClick={handleCalcul}>
          Calcular
        </button>
      </div>

      <h2>{mensagem}</h2>

    </div>
  )
}

export default App
