import { Brands } from './components/Brands'
import { Deals } from './components/Deals'
import { FullBanner } from './components/FullBanner'
import { Header } from './components/Header'
import { Shelf } from './components/Shelf'

function App() {
  return (
    <>
      <Header />

      <main>
        <FullBanner />

        <Deals />

        <Brands />

        <Shelf />
      </main>
    </>
  )
}

export default App
