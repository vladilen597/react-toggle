import cn from 'classnames'
import './Toggle.css'

type ChangeHandler =
  | (() => void)
  | ((event: React.ChangeEvent<HTMLInputElement>) => void)

interface IToggleProps {
  isChecked: boolean
  onChange: ChangeHandler
  parentStyles?: string
  animated?: boolean
  size?: number
  margin?: number
  checkedIcon?: any
  uncheckedIcon?: any
}

const Toggle = ({
  size = 14,
  margin,
  isChecked = false,
  onChange,
  parentStyles,
  animated = true,
  checkedIcon,
  uncheckedIcon,
}: IToggleProps) => {
  return (
    <label
      style={
        {
          parentStyles,
          '--dimension': `${size}px`,
          '--thumb-margin': `${margin}px`,
        } as React.CSSProperties
      }
      className={cn('toggle', parentStyles)}
    >
      <input
        checked={isChecked}
        onChange={onChange}
        className='toggle__checkbox'
        type='checkbox'
      />
      <div className='toggle__background-icons'>{checkedIcon}</div>
      <div
        style={animated ? { transition: 'transform 0.3s' } : {}}
        className={cn(
          'toggle__thumb',
          isChecked && 'theme-toggle__thumb--active'
        )}
      ></div>
    </label>
  )
}

export default Toggle
