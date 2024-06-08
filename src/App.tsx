import { ChangeEvent, useState } from 'react'
import './App.css'
import Toggle from './Toggle/Toggle'

const App = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Toggle
      size={14}
      margin={3}
      parentStyles='theme-toggle'
      isChecked={isChecked}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        setIsChecked(event.target.checked)
      }
    />
  )
}

export default App
