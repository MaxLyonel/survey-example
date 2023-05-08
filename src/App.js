import { useState, useEffect } from 'react'
import './App.css'
import getEmployees from './services/employee/getEmployees'


function App() {

  const [employees, setEmployees] = useState({}) // Estado

  useEffect(function () {
    getEmployees().then(employees => setEmployees(employees))
  }, []) // Segundo parámetro son las dependencias

  console.log(employees)

  return (
    <div className="App">
    </div>
  )
}

export default App;
