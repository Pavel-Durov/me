
import { useRouteError } from 'react-router-dom'

export function Error (): JSX.Element {
  const err: any = useRouteError()
  console.error(err)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* <p>
        <i>{err.statusText || err.message}</i>
      </p> */}
    </div>
  )
}
