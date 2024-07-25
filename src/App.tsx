import ListaVagas from './containers/ListaVagas'

import EstiloGlobal, { Container } from './styles'
import { Titulo } from './components/Cabecalho/styles'
import Hero from './components/Hero'
import { Theme } from './theme'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <EstiloGlobal />
      <Titulo />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
