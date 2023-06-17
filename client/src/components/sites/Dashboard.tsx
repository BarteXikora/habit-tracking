import { Container, Row, Col } from 'react-bootstrap'

import Header from '../sections/Header'

const Dashboard = () => {
    return <Container fluid>
        <Row>
            <Col className='p-0'>
                <Header />
            </Col>
        </Row>
    </Container>
}

export default Dashboard