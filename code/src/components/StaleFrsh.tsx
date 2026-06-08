import React from 'react'
import { fetchUsers } from '../queryFunctions'
import { useQuery } from '@tanstack/react-query'

const StaleFrsh = () => {
    const {data} = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
        staleTime: 60000
    })
  return (
    <div>
      This is the data
      {JSON.stringify(data)}
    </div>
  )
}

export default StaleFrsh
