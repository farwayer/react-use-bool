import {useCallback, useState} from 'react'


export function useBool(initial = false) {
  const [value, setValue] = useState(initial)
  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])
  return [value, setTrue, setFalse]
}

export function useToggle(initial = false) {
  const [value, setValue] = useState(initial)
  const toggle = useCallback(() => setValue(!value), [value])
  return [value, toggle, setValue]
}
