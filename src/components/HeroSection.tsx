import { useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const stats = [
  { value: '30', label: 'Days' },
  { value: '35', label: 'Min / session' },
  { value: '5', label: 'Daily habits' },
]

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <section className='hero-section py-5'>
      <Row className='align-items-center g-4'>
        <Col lg={7}>
          <Badge bg='success' className='text-uppercase tracking-wide mb-3'>
            30-Day Challenge
          </Badge>
          <h1 className='display-5 fw-bold text-light hero-title mb-3'>
            30-Day Fitness Challenge &amp; Wellness Club
          </h1>
          <p className='hero-text mb-4'>
            A structured program built for busy students. Pick your plan, track daily habits, and
            build lasting momentum — one day at a time.
          </p>
          <div className='d-flex gap-3 flex-wrap mb-5'>
            <Button
              variant='success'
              size='lg'
              className='fw-semibold px-5 rounded-pill hero-cta-primary'
              onClick={() => navigate('/tracker')}
            >
              Start Tracking
            </Button>
            <Button
              variant='outline-light'
              size='lg'
              className='fw-semibold px-5 rounded-pill'
              onClick={() => navigate('/workout')}
            >
              View Plans
            </Button>
          </div>
          <Row className='g-0 hero-stats'>
            {stats.map((stat) => (
              <Col xs={4} key={stat.label}>
                <div className='hero-stat'>
                  <span className='hero-stat-value'>{stat.value}</span>
                  <span className='hero-stat-label'>{stat.label}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col lg={5}>
          <Card className='shadow hero-card'>
            <Card.Body>
              <p className='text-uppercase fw-semibold text-success mb-1 small'>Why this works</p>
              <h2 className='h4 fw-bold'>Clear goals + accountability = sustainable change</h2>
              <ul className='list-unstyled mt-4 mb-0'>
                <li className='d-flex gap-3 mb-3'>
                  <span className='hero-icon bg-success text-dark rounded-circle'>1</span>
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
                      Micro coaching tips reinforce recovery, mindful eating, and consistency to
                      keep morale high.
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
