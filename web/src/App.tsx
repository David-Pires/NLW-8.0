
interface ButtonProps {
  text?: string 

}
function Button(props: ButtonProps) { 
  return <button className={`
  bg-purple-500 p-2
  `}>{props.text ?? 'default'}</button>  
  //Interrogação na interface torna a passagem de props opcional no componente
}

function App() {
  return (
    <div>
      <h1>Hello World</h1>

      <Button text="enviar"/>
      <Button text="mais"/>
      <Button />
    </div>
  )
}

        
export default App
