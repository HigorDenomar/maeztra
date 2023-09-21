import { Deals } from './components/Deals'
import { FullBanner } from './components/FullBanner'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Header />

      <main>
        <FullBanner />

        <Deals />
      </main>
    </>
  )
}

export default App
