import { useMemo, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Stack from 'react-bootstrap/Stack'

export type Habit = {
  id: string
  label: string
  description: string
  tip: string
}

const habits: Habit[] = [
  {
    id: 'water',
    label: 'Drink 80 oz of water',
    description: 'Log a glass every time you refill your bottle so hydration keeps pace with workouts.',
    tip: 'Pro tip: add electrolytes on active recovery days.',
  },
  {
    id: 'steps',
    label: '6,000 intentional steps',
    description: 'Short “movement snacks” between classes keep energy up and support daily NEAT goals.',
    tip: 'Try 3 x 10-minute walks after meals.',
  },
  {
    id: 'sleep',
    label: '7+ hours of sleep',
    description:
      'Cut screens 30 minutes before bed and preset your workout clothes for touch-less mornings.',
    tip: 'Use gentle stretching and box breathing to wind down.',
  },
  {
    id: 'mobility',
    label: '8-minute mobility reset',
    description: 'Rotate hips, shoulders, and ankles to offset sitting and prep your body for tomorrow.',
    tip: 'Pair it with light foam rolling on recovery days.',
  },
  {
    id: 'protein',
    label: '3 protein-forward meals',
    description: 'Focus on palm-sized servings plus colorful veggies to support muscle repair.',
    tip: 'Batch-cook lean protein on Sundays to stay ahead.',
  },
]

const createInitialState = () =>
  habits.reduce<Record<string, boolean>>((acc, habit) => {
    acc[habit.id] = false
    return acc
  }, {})

const HabitTracker = () => {
  const [completedHabits, setCompletedHabits] = useState<Record<string, boolean>>(createInitialState)

  const completedCount = useMemo(
    () => Object.values(completedHabits).filter(Boolean).length,
    [completedHabits],
  )
  const progress = Math.round((completedCount / habits.length) * 100)

  const toggleHabit = (id: string) => {
    setCompletedHabits((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const resetHabits = () => setCompletedHabits(createInitialState())

  return (
    <Card className='shadow-lg habit-tracker'>
      <Card.Body>
        <Stack direction='horizontal' className='flex-wrap gap-3 justify-content-between'>
          <div>
            <p className='text-success text-uppercase small fw-semibold mb-1'>Daily accountability</p>
            <h3 className='h4 fw-bold mb-0 text-white'>Healthy Habit Tracker</h3>
            <small className='text-secondary'>
              {completedCount} / {habits.length} habits complete today
            </small>
          </div>
          <Button variant='outline-secondary' size='sm' className='ms-lg-auto' onClick={resetHabits}>
            Reset Day
          </Button>
        </Stack>
        <p className='text-secondary mt-3'>
          Check off each habit when it is complete. The progress bar updates automatically to reflect
          your momentum for the day.
        </p>
        <ProgressBar
          now={progress}
          label={`${progress}%`}
          variant={progress === 100 ? 'success' : 'info'}
          className='mb-4'
        />
        <ListGroup variant='flush'>
          {habits.map((habit) => (
            <ListGroup.Item key={habit.id} className='py-3 habit-item d-flex align-items-center gap-3'>
              <Form.Check
                id={habit.id}
                aria-label={habit.label}
                checked={completedHabits[habit.id]}
                onChange={() => toggleHabit(habit.id)}
              />
              <div>
                <p className='fw-semibold text-white mb-1'>{habit.label}</p>
                <small className='text-secondary d-block mb-1'>{habit.description}</small>
                <span className='text-success small fw-semibold'>{habit.tip}</span>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default HabitTracker
