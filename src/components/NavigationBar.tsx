import { NavLink, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const links = [
  { path: '/', label: 'Home', end: true },
  { path: '/workout', label: 'Workout' },
  { path: '/schedule', label: 'Schedule' },
  { path: '/progress', label: 'Progress' },
  { path: '/tracker', label: 'Tracker' },
]

const NavigationBar = () => {
  const navigate = useNavigate()

  return (
    <Navbar expand='lg' bg='black' data-bs-theme='dark' sticky='top' className='nav-elevated'>
      <Container fluid='md'>
        <Navbar.Brand className='fw-bold text-uppercase tracking-wide brand-mark text-white'>
          FITBIT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='primary-nav' />
        <Navbar.Collapse id='primary-nav'>
          <Nav className='me-auto align-items-lg-center nav-links'>
            {links.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  [
                    'nav-link text-uppercase fw-semibold small tracking-wide',
                    isActive ? 'text-white' : 'text-white-50',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </Nav>
          <div className='d-flex gap-2 mt-3 mt-lg-0'>
            <Button
              variant='success'
              className='fw-semibold px-4 rounded-pill cta-outline'
              onClick={() => navigate('/tracker')}
            >
              Start Tracking
            </Button>
            <Button
              variant='outline-light'
              className='fw-semibold px-4 rounded-pill cta-outline'
              onClick={() => navigate('/workout')}
            >
              View Plans
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
