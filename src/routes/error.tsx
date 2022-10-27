export function Error (): JSX.Element {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected errorhas occurred.</p>
      {/* <p>
        <i>{err.statusText || err.message}</i>
      </p> */}
    </div>
  )
}
