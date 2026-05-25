import {useState} from 'react'

const Button = ({onClick, text}) =>{
  return <button onClick={onClick}>{text}</button>
}
const StatisticLine = ({text, value}) => {
  return(
    <p>{text} {value}</p>
  )
  
}

const Statistic = ({average, good, bad, neutral}) => {
  let scoreSum = 0
  if(average.length == 0) {
    return(
      <div>
        <br />The average of all scores and the porcentage of positive votes will be shown when a vote is cast
      </div>
    )}
    average.forEach((element) => scoreSum = scoreSum + element);

return(
  
    <table>
      <colgroup>
        <col span={2} style={{borderSpacing: 0}}/>
      </colgroup>
      <thead>
        <tr><td><h1>Statistics</h1></td></tr>
      </thead>
      <tbody>
        <tr>
          <td><StatisticLine text='Good: ' value={good}/></td>
         </tr>
        <tr>
          <td><StatisticLine text='Neutral: ' value={neutral}/></td>
        </tr>
        <tr>
          <td><StatisticLine text='Bad: ' value={bad}/></td>
        </tr>
        <tr>
          <td><StatisticLine text='Total reviews: ' value={average.length}/></td>
        </tr>
        <tr><td><StatisticLine text='Average: ' value={scoreSum/average.length}/></td></tr>
        <tr><td><StatisticLine text='Positive Porcentage: ' value={(good-bad)*100/average.length}/></td></tr>
      </tbody>      
    </table>
)
  
}

const App = () =>{
  const [good, setGood] = useState(0)  
  const [neutral, setNeutral] = useState(0)  
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState([])  
  const handleGoodClick = () => {
    console.log("Good clicked.. increased neutral by one")
    setGood(good+1)
    const newAverage = average.concat(1) 
    setAverage(newAverage)
  }
  const handleNeutralClick = () => {
    console.log("Neutral clicked.. increased neutral by one")
    setNeutral(neutral+1)
    const newAverage = average.concat(0)
    setAverage(newAverage)
  }
  const handleBadClick = () => {
    console.log("Bad clicked.. increased neutral by one")
    setBad(bad+1)
    const newAverage = average.concat(-1)
    setAverage(newAverage)
  }



  return(
   <div>
    <h1>Give feedback for food :3</h1>
    <Button onClick={handleGoodClick} text='Good button'/>
    <Button onClick={handleNeutralClick} text='Neutral button'/>
    <Button onClick={handleBadClick} text='Bad Button'/>
    
    
    <Statistic average = {average} good={good} bad={bad} neutral={neutral}/>
   </div>  
  )
}

export default App 