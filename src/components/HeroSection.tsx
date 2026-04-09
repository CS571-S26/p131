import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const HeroSection = () => {
  return (
    <section className='hero-section py-5'>
      <Row className='align-items-center g-4'>
        <Col lg={7}>
          <Badge bg='success' className='text-uppercase tracking-wide mb-3'>
            Sprint 2 milestone
          </Badge>
          <h1 className='display-5 fw-bold text-light hero-title mb-3'>
            30-Day Fitness Challenge & Wellness Club
          </h1>
        </Col>
        <Col lg={5}>
          <Card className='shadow hero-card'>
            <Card.Body>
              <p className='text-uppercase fw-semibold text-success mb-1 small'>Why this works</p>
              <h3 className='h4 fw-bold'>Clear goals + accountability = sustainable change</h3>
              <ul className='list-unstyled mt-4 mb-0'>
                <li className='d-flex gap-3 mb-3'>
                  <span className='hero-icon bg-success text-white rounded-circle'>1</span>
                  <div>
                    <p className='mb-0 fw-semibold'>Weekly structure</p>
                    <small className='text-secondary'>
                      30-day calendar balances strength, mobility, and recovery days so users never
                      guess what&apos;s next.
                    </small>
                  </div>
                </li>
                <li className='d-flex gap-3 mb-3'>
                  <span className='hero-icon bg-primary text-white rounded-circle'>2</span>
                  <div>
                    <p className='mb-0 fw-semibold'>Habit tracker</p>
                    <small className='text-secondary'>
                      Checklist + progress bar let users celebrate streaks while logging water,
                      sleep, &amp; nutrition goals.
                    </small>
                  </div>
                </li>
                <li className='d-flex gap-3'>
                  <span className='hero-icon bg-warning text-dark rounded-circle'>3</span>
                  <div>
                    <p className='mb-0 fw-semibold'>Healthy nudges</p>
                    <small className='text-secondary'>
                      Micro coaching tips reinforce recovery, mindful eating, and consistency to keep
                      morale high.
                    </small>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  )
}

export default HeroSection
