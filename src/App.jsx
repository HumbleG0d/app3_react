import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCart'

export function App() {
  const formatUserName = (userName) => `@${userName}`

  return (
    <section className='App'>
      <TwitterFollowCard
          formatUserName = {formatUserName}
          userName='midudev'
          name = 'Miguel Angel Durán'
      />
       <TwitterFollowCard
          formatUserName = {formatUserName}
          userName='pheralb'
          name = 'Pablo hernandez'
      />
       <TwitterFollowCard
          formatUserName = {formatUserName}
          userName='gancy'
          name = 'Elonk Musk'
      />
    </section>
  )
}

