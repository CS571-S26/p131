import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ScheduleTimeline from '../components/ScheduleTimeline'

const scheduleEntries = [
  {
    time: '6:30a',
    title: 'Rise + prime',
    focus: 'Light mobility, 12 oz water, intention check-in.',
    notes: 'Open the tracker, skim the plan of the day, and stack hydration with sunlight.',
  },
  {
    time: '12:30p',
    title: 'Walk & stretch break',
    focus: '2,000 steps + desk stretch circuit.',
    notes: 'Helps chip away at the step goal while fighting the afternoon slump.',
  },
  {
    time: '4:30p',
    title: 'Workout block',
    focus: 'Follow the workout plan for the day (max 35 minutes).',
    notes: 'Each plan card lays out the circuits so you simply press play.',
  },
  {
    time: '8:30p',
    title: 'Wind-down ritual',
    focus: 'Mobility, recovery snack, plan for tomorrow.',
    notes: 'Log sleep intentions, prep clothes, and check off completed habits.',
  },
]

const quickWins = [
  { label: 'Mobility snack', detail: '2-minute hip flow between study blocks.' },
  { label: 'Hydration alarm', detail: 'Phone reminders every 90 minutes.' },
  { label: 'Protein prep', detail: 'Batch cook 2 lean options on Sundays.' },
  { label: 'Accountability text', detail: 'Share your tracker with a friend nightly.' },
]

const DailySchedule = () => {
  return (
    <section>
      <div className='mb-4'>
        <p className='text-uppercase text-success fw-semibold mb-1 tracking-wide'>Daily schedule</p>
        <h2 className='h3 fw-bold text-white'>A structure you can actually follow.</h2>
        <p className='text-secondary'>
          Here&apos;s the default 24-hour rhythm the club recommends. It locks in movement, nutrition,
          and reflection without taking over your day.
        </p>
      </div>
      <Row className='g-4'>
        <Col lg={7}>
          <ScheduleTimeline entries={scheduleEntries} />
        </Col>
        <Col lg={5}>
          <Card className='shadow-sm border-0 schedule-sidecard'>
            <Card.Body>
              <p className='text-uppercase text-success fw-semibold mb-1'>Quick wins</p>
              <h3 className='h4 fw-bold text-white'>Stack these small cues</h3>
              <p className='text-secondary'>
                Mix and match the following nudges to keep your challenge momentum going during
                hectic weeks.
              </p>
              <ul className='list-unstyled mt-4 mb-0'>
                {quickWins.map((win) => (
                  <li key={win.label} className='mb-3'>
                    <p className='mb-1 fw-semibold text-white'>{win.label}</p>
                    <small className='text-secondary'>{win.detail}</small>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  )
}

export default DailySchedule
