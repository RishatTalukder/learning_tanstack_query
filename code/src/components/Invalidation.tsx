import { useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { deleteUser, fetchIdQueryOption, fetchUserById, fetchUsers } from '../queryFunctions'

const Invalidation = () => {
  const {data, isfetching, error, refetch} = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  })

  const client = useQueryClient()



  return (
    <div>
      {data && data.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
          <h1>{user.password}</h1>
          <button
          onClick={()=>{
            deleteUser(user.id)
            client.invalidateQueries({
              queryKey: ['users'],
              
            })
          }}
          >Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Invalidation
