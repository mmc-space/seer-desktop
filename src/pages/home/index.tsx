import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage: FC = () => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate('/battle')}>
      go to battle
    </div>
  )
}

export default HomePage
