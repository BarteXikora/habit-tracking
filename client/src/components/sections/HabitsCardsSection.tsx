import { Row, Col } from 'react-bootstrap'

const HabitsCardsSection = () => {
    const __left: number = 2

    return <Row className='px-4 py-5'>
        <Col xs={12} className='d-flex align-items-center mb-3'>
            <h2 className='m-0'>Śledzone nawyki:</h2>

            <div className={`title-left-habits ${__left > 0 && 'title-left-habits-warn'} py-1 px-3 ms-3`}>
                {__left > 0 ? __left + ' do uzupełnienia!' : 'Gotowe!'}
            </div>
        </Col>
    </Row>
}

export default HabitsCardsSection