import Card from 'react-bootstrap/Card'
import HabitTracker from '../components/HabitTracker'
import SectionHeading from '../components/SectionHeading'

const HabitTrackerPage = () => {
  return (
    <section>
      <SectionHeading
        label='Habit tracker'
        title='Celebrate the tiny wins.'
        description='Check off each daily habit, watch the progress bar climb, and reset whenever you need a fresh start.'
      />
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
