import { useParams } from 'react-router-dom'

export function UserProfile() {
  const { id } = useParams()
  return <div>UserProfile {id}</div>
}
