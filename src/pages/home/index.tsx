import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const ping = () => {
  window.app.ping().then((res) => {
    console.log(res)
  })
}

const HomePage: FC = () => {
  const navigate = useNavigate()

  return (
    <div>
      <p onClick={() => navigate('/battle')}>go to battle</p>
      <p onClick={ping}>
        electron上下文隔离例子-
        {
        `node: V${window.versions.node()}`
        }
      </p>
    </div>
  )
}

export default HomePage
