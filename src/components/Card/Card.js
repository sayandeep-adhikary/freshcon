import React from 'react'
import styles from './Card.module.css'
import { Text } from '@chakra-ui/react' 

export default function Card() {
  return (
    <div>
        <Text fontSize={'2rem'} color={'white'} className={styles.mainText}>Source & Process</Text>
        <Text fontSize={'1rem'} color={'white'} className={styles.text1}>Finest Quality coconuts sourced from Kerala - the Land of Coconuts.</Text>
    </div>
  )
}
