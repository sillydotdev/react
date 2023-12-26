import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>My name is Kamran</h1>
    </div>
  )
}

// won't work as the keys are defined by us... React expects different
// const reactElement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",
//       target: "_blank"
//   },
//   children: "Click to visit Google"
// }

// const anotherUser = "Google site"
// one way in react
// const element = (
//   <a href="https://google.com" target="_blank">Visit Google</a>
// )

// This will work
// const reactElement = React.createElement(
//   'a',
//   {href: "https://google.com", target: "_blank"},
//   'click me to visit google'
//   anotherUser 
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // reactElement
)

