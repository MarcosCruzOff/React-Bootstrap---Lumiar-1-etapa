import { React } from 'react'

import { Container } from 'react-bootstrap'
import { PaginaProdutos } from './components/produtos/PaginaProdutos'
import { PaginaQuemSomos } from './components/quemSomos/PaginaQuemSomos'
import { PaginaNossoTime } from './components/nossoTime/PaginaNossoTime'
import { Carrossel } from './components/carrossel/Carrossel'
import { NavBar } from './components/navbar/NavBar'
import { Footer } from './components/footer/Footer'

function App() {
	return (
		<>
			<Container>
				<NavBar />
				<Carrossel />
				<PaginaQuemSomos />
				<PaginaNossoTime />
				<PaginaProdutos />
			</Container>
			<Footer />
		</>
	)
}

export default App
