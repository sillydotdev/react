import MyHobbies from './kamran.jsx'

function App() {
  const address = "I am from Kashmir"
  return (
    // <></> :: is called fragment in jsx. it refers that it is only one componenet because you can return only one component
    <>  
      <h1>My name is KAMRAN. {address}</h1>  
      <MyHobbies/>                            
    </>
  )
}

export default App


// NOTE:
// {address}: way to inject variable in the jsx. Here it is called "evaluated expression"
// because it only takes the final value. You cannot inject JS if-else or something