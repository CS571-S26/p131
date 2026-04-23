import Card from 'react-bootstrap/Card'
import HabitTracker from '../components/HabitTracker'

const HabitTrackerPage = () => {
  return (
    <section>
      <div className='mb-4 text-center text-md-start'>
        <p className='text-uppercase text-success fw-semibold mb-1 tracking-wide'>Habit tracker</p>
        <h2 className='h3 fw-bold text-white'>Celebrate the tiny wins.</h2>
        <p className='text-secondary'>
          This checklist is the interactive element of the project proposal. It lets users check off
          daily habits, view a living progress bar, and reset the day whenever they need a fresh start.
        </p>
      </div>
      <HabitTracker />
      <Card className='mt-4 shadow-sm border-0 bg-body-secondary'>
        <Card.Body>
          <p className='fw-semibold text-white mb-1'>How students are using it</p>
          <p className='text-secondary mb-0'>
            The tracker proves that the experience is not just static content. Each interaction updates
            state instantly so users can physically see their progress when they hydrate, walk, or prep
            meals.
          </p>
        </Card.Body>
      </Card>
    </section>
  )
}

export default HabitTrackerPage
