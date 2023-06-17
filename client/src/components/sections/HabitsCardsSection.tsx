import { Row, Col } from 'react-bootstrap'

const HabitsCardsSection = () => {
    const __left: number = 0

    return <Row className='px-4 py-5'>
        <Col xs={12}>
            <h2>Śledzone nawyki:</h2>

            <div className={`title-left-habits ${__left > 0 && 'title-left-habits-warn'}`}>
                {__left > 0 ? __left + ' do uzupełnienia' : 'Gotowe!'}
            </div>
        </Col>
    </Row>
}

export default HabitsCardsSection