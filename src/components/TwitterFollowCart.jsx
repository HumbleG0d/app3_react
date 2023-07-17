import { useState } from "react"

export function TwitterFollowCard({ formatUserName , userName , name}){

  const [isFollowing , setIsFollowing] = useState(false)

  const handClick = () => {
    setIsFollowing(!isFollowing)
  }

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing 
  ? 'tw-followCard-button is-following'
  : 'tw-followCard-button'
  return(
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
         className='tw-followCard-avatar' 
        src={`https://unavatar.io/${userName}`}
        alt={`Avatar de ${name}`} 
        />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
           <span className='tw-followCard-info-name'> {formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
       <button className={buttonClassName} onClick={handClick}>
          {text}
       </button>
      </aside>
   </article>
  )
}