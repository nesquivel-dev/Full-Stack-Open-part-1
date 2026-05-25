import {useState} from 'react'

const Button = ({onClick, text}) =>{
  return <button onClick={onClick}>{text}</button>
}

const Anecdote = ({anecdote, votes, title}) =>{
  return (
    <div>
      <h1>{title}</h1>
      <p>{anecdote}</p>
      <b>Votes: {votes}</b>
    </div>
    
  )
}



  

const App = () =>{
  
   const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
    'A good developer is only worth it if they have a good character.'
  ]

   const [votes, setVotes] = useState(
   // () => {
  //   //initializing votes depending on length of anecdotes array.
  //   const initVotes = []
  //   for (let i= 0; i < anecdotes.length; i++) {
  //     initVotes.push(0)
  //   } 
  //   return initVotes
  //}
  [0,0,0,0,0,0,0,0,0]
  )
  console.log(votes)
  

  const [selected, setSelected] = useState(0)
  const [mostVotes, setMostVotes] = useState(0)
  const [mostVotesSelected, setMostVotesSelected] = useState(0)
  const randomAnecdote = () => {
    const randNum = Math.floor(Math.random()*(anecdotes.length)) 
    console.log(randNum) 
    setSelected(randNum)
    // mostVotesPosition()
    // mostVotesAnecdote()
  }
  const addVote = () => {
    const newVotes = [...votes] 
    newVotes[selected] +=1
    setVotes(newVotes)
    mostVotesAnecdote(newVotes)
    mostVotesPosition(newVotes)
  }
  const mostVotesAnecdote = (updatedVotes) => {
    console.log('MostVotesAnectdote updatedVotes:'+updatedVotes)
    let temp = 0
    if(updatedVotes.length>1){
      for(let i = 0; i < anecdotes.length; i++) {
        if(temp<updatedVotes[i]){
          temp=updatedVotes[i]
          console.log('Current most votes in array:'+  updatedVotes[i] )
        }
      }
      setMostVotes(temp)
    }
    else{
      console.log('Most ammount of votes.'+ temp)
      setMostVotes(temp)
    }
     
  }  
  const mostVotesPosition = (updatedVotes) => {
    console.log('mostVotesPosition updatedVotes:' + updatedVotes)
    let temp = 0
    let mostVotesPos = 0
    for(let i = 0; i < anecdotes.length; i++) {
      if(temp<updatedVotes[i]){
        temp=updatedVotes[i]
        mostVotesPos = i
        console.log('Position of the anecdote with the most votes: ' + i)
      }
    }
    console.log("position of anecdote with most votes in array:" + mostVotesPos)
    setMostVotesSelected(mostVotesPos)
  }


  return(
   <div>
   <Button onClick={randomAnecdote} text='Random anecdote' />
    <Button onClick={addVote} text='Vote for this anecdote!' />
    <Anecdote title='Anecdote of the day' anecdote = {anecdotes[selected]} votes={votes[selected]}/><br />
    <Anecdote title='Anecdote with the most votes' anecdote = {anecdotes[mostVotesSelected]} votes={mostVotes}/><br />
   </div>
  )
}

export default App 