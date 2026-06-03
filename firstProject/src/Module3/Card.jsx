import React from 'react'

function Card() {
  const imageURL =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo6tdNPGQZCscIEkn4iSBXwT1YHmhRu8Lqpg&s'
  const name = 'Virat Kohli'
  const role = 'Cricketer'
  const isOnline = true

  return (
    <div style={{
      height: '400px',
      width: '300px',
      backgroundColor: 'white',
      margin: '10px',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px black',
      padding: '10px'
    }}>
      <img src={imageURL} alt={name} height={200} width={200} />
      <h2>{name}</h2>
      <p>{role}</p>

      <button
        style={{
          backgroundColor: 'lightgreen',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer',
          borderRadius: '5px'
        }}
      >
        Follow
      </button>

      <p style={{ color: isOnline ? 'green' : 'red' }}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  )
}

export default Card

