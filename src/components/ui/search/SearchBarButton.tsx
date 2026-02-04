import { FC } from 'react'
import styles from './SearchBarButton.module.css'
import { Button } from '@mui/material'
import { Search } from '@mui/icons-material'

interface SearchBarButtonProps {
  text: string
}

const SearchBarButton: FC<SearchBarButtonProps> = ({text}) => {
  return (
    <Button 
      variant="contained" 
      color="primary"
      size='large'
      className={styles.animatedButton}
      endIcon={<Search />}
      sx={{
        borderRadius: '15px'
      }}
    >
      {text}
    </Button>
  )
}

export default SearchBarButton