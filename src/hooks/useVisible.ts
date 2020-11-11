import { useEffect, useState } from 'react'
import useVisibilitySensor from '@rooks/use-visibility-sensor'

export default function (ref: any) {
  const [visible, setVisible] = useState(false)
  const { isVisible } = useVisibilitySensor(ref, {
    intervalCheck: true,
    scrollCheck: false,
    resizeCheck: true,
    partialVisibility: true,
    minTopValue: 0,
  })

  useEffect(() => {
    if (!visible && isVisible) {
      setVisible(true)
    }
  }, [visible, isVisible])

  return visible
}
