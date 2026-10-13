import { useEffect, useState } from 'react'

export const ROUTES = ['/', '/about', '/contact']

export function resolveRoute() {
  const hash = window.location.hash.replace(/^#/, '')
  const clean = hash.split('?')[0]
  if (!clean || clean === '/') return '/'
  if (ROUTES.includes(clean)) return clean
  return '/'
}

export function useRoute() {
  const [route, setRoute] = useState(resolveRoute)

  useEffect(() => {
    const onHash = () => {
      setRoute(resolveRoute())
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return route
}
