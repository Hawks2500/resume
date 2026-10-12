import { useContext } from 'react'
import { ConfidentialContext } from './ConfidentialContext'

export function useConfidential() {
  const context = useContext(ConfidentialContext)
  if (!context) throw new Error('useConfidential must be used within a ConfidentialProvider')
  return context
}
