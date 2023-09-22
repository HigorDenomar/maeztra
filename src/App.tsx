import { BannerWithTexts } from './components/BannerWithTexts'
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

        <BannerWithTexts
          title='Lorem ipsum'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.'
          image='https://i.imgur.com/1vLCv01.png'
          alt='Nova coleção de outono-inverno'
        />
      </main>
    </>
  )
}

export default App
