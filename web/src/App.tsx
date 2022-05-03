
interface ButtonProps {
  text?: string 

}
function Button(props: ButtonProps) { 
  return <button>{props.text ?? 'esta frase aparece aqui vai aparecer aqui'}</button>  
  //Interrogação na interface torna a passagem de props opcional no componente
}

function App() {
  return (
    <div>
      <h1>Hello World</h1>

      <Button text="enviar"/>
      <Button text="mais um"/>
      <Button />
    </div>
  )
}

        
export default App
