import { useState } from 'react'

import { calculateInvestmentResults } from './util/investment'
import Header from './components/Header/Header'
import UserInput from './components/UserInput/UserInput'
import Results from './components/Results/Results'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  //let annualData = calculateInvestmentResults(userInput);

  const handleChange = (field, value) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      [field]: +value,
      
    }));
    
    //annualData = calculateInvestmentResults(userInput);
  }




  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results userInput={userInput} />
    </>
  )
}

export default App
