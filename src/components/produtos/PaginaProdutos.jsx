import { Row, Col, Container, Image, Button } from 'react-bootstrap'
// import { CardsProduto } from './CardsProduto'

export function PaginaProdutos() {
	return (
		<>
			<section className="py-5 my-5" id="produtos">
				{/* Título Produto */}
				<Row className="py-5 mt-5 mx-auto">
					<h2 class="text-center text-uppercase">Produtos</h2>
				</Row>
				<Container>
					<Row xs={1} md={2} lg={3} className="g-4">
						<Col>
							<Image
								fluid
								className="w-100 mx-auto"
								src="/assets/produto-1.png"
							/>
							<h4>Base Serum</h4>
							<p className="text-wrap">
								Cobertura leve com proteção solar
							</p>
							<div className="d-flex justify-content-between">
								<Button variant="primary">Comprar</Button>
								<h2 class="text-success">R$ 89,99</h2>
							</div>
						</Col>
						<Col>
							<Image
								fluid
								className="w-100 mx-auto"
								src="/assets/produto-2.png"
							/>
							<div className="text-wrap">
								<h4>Kit skin care beyou</h4>
								<p>
									Para pele sensíveis e com manchas, com
									extrato de rosas e claramida.
								</p>
							</div>
							<div className="d-flex justify-content-between">
								<Button variant="primary">Comprar</Button>
								<h2 class="text-success">R$ 65,00</h2>
							</div>
						</Col>
						<Col>
							<Image
								fluid
								className="w-100 mx-auto"
								src="/assets/produto-3.png"
							/>
							<h4>Kit de cuidados noturno</h4>
							<p className="text-wrap">
								Com extrato de chá verde e camomila, acalma a
								pele depois de um dia cheio de poluição
							</p>
							<div className="d-flex justify-content-between">
								<Button variant="primary">Comprar</Button>
								<h2 class="text-success">R$ 42,50</h2>
							</div>
						</Col>
						<Col>
							<Image
								fluid
								className="w-100 mx-auto"
								src="/assets/produto-4.png"
							/>
							<h4>Serum anti-sinais</h4>
							<p className="text-wrap">
								Para todo o tipo de pele.
							</p>
							<div className="d-flex justify-content-between">
								<Button variant="primary">Comprar</Button>
								<h2 class="text-success">R$ 34,99</h2>
							</div>
						</Col>
						<Col>
							<Image
								fluid
								className="w-100 mx-auto"
								src="/assets/produto-5.png"
							/>
							<h4>Esmalte menina moça</h4>
							<p className="text-wrap">
								Cores pastéis secagem rápida
							</p>
							<div className="d-flex justify-content-between">
								<Button variant="primary">Comprar</Button>
								<h2 class="text-success">R$ 25,99</h2>
							</div>
						</Col>
						<Col>
							<Image
								fluid
								className="w-100 mx-auto"
								src="/assets/produto-6.png"
							/>
							<h4>Perfume Acqua Marina</h4>
							<p className="text-wrap">Com notas de jasmine.</p>
							<div className="d-flex justify-content-between">
								<Button variant="primary">Comprar</Button>
								<h2 class="text-success">R$ 120,00</h2>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	)
}
