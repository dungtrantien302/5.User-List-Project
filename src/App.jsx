//1
// import { useState, useEffect } from 'react'
// import { User } from './User'

// export default function App() {
//   const [users, setUsers] = useState([])
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     setIsLoading(true)

//     const controller = new AbortController()
//     fetch("users.json", {
//       signal: controller.signal,
//     })
//       .then(res => res.json())
//       .then(data => setUsers(data))
//       .finally(() => {
//         setIsLoading(false)
//       })

//     return () => {
//       controller.abort()
//     }

//   }, [])

//   return isLoading ? (
//     <h1>Loading...</h1>
//   ) : (
//     <>
//       <h1>User List</h1>
//       <ul>
//         {users.map((user) => {
//           return <User key={user.id} name={user.name} />
//         })}
//       </ul>
//     </>
//   )
// }



//2
import { useState, useEffect } from 'react'
import { User } from './User'

export default function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const controller = new AbortController()
    fetch('https://jsonplaceholder.typicode.com/users', {
      signal: controller.signal,
    })
      .then(res => {
        if (res.status === 200) {
          return res = res.json()
        } else {
          return Promise.reject(res)
        }
      })
      .then(data => {
        setUsers(data)
      })
      .finally(() => {
        setIsLoading(false)
      })

    return () => {
      controller.abort()
    }

  }, [])

  return (
    <>
      <h1>User List</h1>
      <ul>
        {users.map(user => {
          return <User key={user.id} name={user.name} email={user.email} />
        })}
      </ul>
    </>
  )
}
