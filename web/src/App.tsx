
function Button(props) {
  console.log(props.text)
  return <button>I'm a button</button>
  
}

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button text="enviar"/>
      <Button text="mais um"/>
    </div>
  )
}

        
export default App
