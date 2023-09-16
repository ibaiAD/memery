import { useState } from 'react'

export function useRecord (timer: number) {
  const [record, setRecord] = useState(0)

  const LOCAL_STORAGE_KEY = 'memery-session-record'

  const saveRecord = () => {
    if (timer < record || record === 0) {
      setRecord(timer)
      localStorage.setItem(LOCAL_STORAGE_KEY, timer.toString())
    }
  }

  const getRecord = () => {
    const prevRecord = localStorage.getItem(LOCAL_STORAGE_KEY)
    prevRecord != null ? setRecord(Number(prevRecord)) : setRecord(0)

    setRecord(Number(prevRecord))
  }

  return {
    record,
    saveRecord,
    getRecord
  }
}
