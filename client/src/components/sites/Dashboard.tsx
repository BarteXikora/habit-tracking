import { Container, Row, Col } from 'react-bootstrap'

import Header from '../sections/Header'
import HabitsCardsSection from '../sections/HabitsCardsSection'

const Dashboard = () => {
    return <Container fluid>
        <Row>
            <Col className='p-0'>
                <Header />
            </Col>
        </Row>

        <HabitsCardsSection />
    </Container>
}

export default Dashboard