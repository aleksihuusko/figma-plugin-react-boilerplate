import { useEffect, useState } from 'react'

import { dispatchTS, getColorTheme, listenTS, subscribeColorTheme } from '@/utils/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

export const App = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount((prev) => prev + 1)

  const helloWorld = () => {
    dispatchTS('hello', {
      string: 'World',
      num: 20,
    })

    listenTS(
      'helloCallback',
      (res) => {
        console.log('helloCallback result: ', res)
      },
      true
    )
  }

  const [lightOrDarkMode, setLightOrDarkMode] = useState(getColorTheme())
  useEffect(() => {
    subscribeColorTheme((mode) => {
      setLightOrDarkMode(mode)
    })
  }, [])

  return (
    <>
      <main className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Figma Plugin Boilerplate</h1>
        <h2 className="text-lg mb-4">Vite + React + TypeScript + Tailwind + shadcn/ui</h2>
        <Card>
          <CardContent className="flex flex-col gap-2">
            <Button onClick={increment}>Count is {count}</Button>
            <Button onClick={helloWorld}>Say 'Hello World'</Button>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Edit main.tsx and save to test HMR updates.
            </p>
          </CardFooter>
        </Card>
      </main>
    </>
  )
}
