import cn from 'classnames'
import CircularProgress from '@mui/material/CircularProgress'
import css from './index.module.scss'

export const Loader = ({
  type, 
}: { 
  type: 'page' | 'section' | 'button'
}) => (
  <div
    className={cn({
      [css.loader]: true,
      [css[`type-${type}`]]: true,
    })}
  >
    <CircularProgress
      color="inherit"
      size={getProgressSize(type)}
      sx={{
        '& .MuiCircularProgress-circle': {
          strokeLinecap: 'round',
        },
      }}
    />
  </div>
)

// Вспомогательная функция для определения размера CircularProgress на основе type
const getProgressSize = (type: 'page' | 'section' | 'button') => {
  switch (type) {
    case 'page':
      return 34
    case 'section':
      return 30
    case 'button':
      return 20
  }
}