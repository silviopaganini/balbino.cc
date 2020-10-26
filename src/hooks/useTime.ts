import moment from 'moment-timezone'
import { useEffect, useState } from 'react'
moment().tz('America/Los_Angeles').format()

export default function (timeszone: string = 'Europe/London') {
  const [time, setTime] = useState(moment().tz(timeszone).format('HH:mm:ss'))
  useEffect(() => {
    const updateTime = () => {
      setTime(moment().tz(timeszone).format('HH:mm:ss'))
    }

    const interval = setInterval(updateTime, 500)
    return () => {
      clearInterval(interval)
    }
  })

  return time
}
