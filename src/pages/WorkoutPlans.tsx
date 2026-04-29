import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import SectionHeading from '../components/SectionHeading'

const plans = [
  {
    level: 'Foundation Plan',
    subtitle: 'Perfect for new movers or students balancing heavy course loads.',
    focus: ['Full-body circuits 3x/week', 'Low-impact conditioning', 'Weekend flexibility reset'],
  },
  {
    level: 'Momentum Plan',
    subtitle: 'Intermediate option that layers progressive overload and longer endurance blocks.',
    focus: [
      'Upper / lower split with tempo cues',
      'Optional finisher ladders for HIIT fans',
      'Deload weekend for recovery and reflection',
    ],
  },
]

const workoutBlocks = [
  {
    title: 'Strength Days',
    details: [
      '10-min dynamic warm-up (hips, t-spine, glutes)',
      'Circuit A: goblet squats + pushups + inverted rows (3 rounds)',
      'Circuit B: split squats + plank drags + SL glute bridge (2 rounds)',
      'Finish with breathing ladder + long stretch',
    ],
  },
  {
    title: 'Conditioning Days',
    details: [
      '5 x 2-min moderate jogs with 1-min walk recoveries',
      'Bodyweight EMOM: burpees, skaters, deadbugs, high knees',
      'Cooldown: walking meditation + calf stretch sequence',
    ],
  },
  {
    title: 'Recovery Sessions',
    details: [
      '15-min guided mobility flow (hips & shoulders)',
      'Foam roll spotlight: lats, hip flexors, calves',
      'Nutrition tip of the day + hydration reminder',
    ],
  },
]

const WorkoutPlans = () => {
  return (
    <section>
      <SectionHeading
        label='Workout plans'
        title='Choose the weekly cadence that matches your energy.'
        description='Every plan respects the 30-day challenge guardrails: 35-minute cap, clear intent for each session, and guidance on when to rest.'
      />
      <Row className='g-4'>
        {plans.map((plan) => (
          <Col md={6} key={plan.level}>
            <Card className='h-100 shadow-sm'>
              <Card.Body>
                <p className='text-success text-uppercase small fw-semibold mb-1'>{plan.level}</p>
                <p className='fw-semibold text-white'>{plan.subtitle}</p>
                <ul className='text-secondary small'>
                  {plan.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Card.Text className='text-secondary mb-0'>
                  Recommended split: Mon/Wed/Fri (strength), Tue/Thu (mobility), Sat (Endurance walk),
                  Sun (Reflection + rest).
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Card className='shadow-lg mt-5'>
        <Card.Body>
          <p className='text-uppercase text-success fw-semibold mb-2'>Session blueprint</p>
          <h3 className='h4 fw-bold text-white'>What does a training day look like?</h3>
          <Accordion className='mt-4' alwaysOpen>
            {workoutBlocks.map((block, index) => (
              <Accordion.Item eventKey={String(index)} key={block.title}>
                <Accordion.Header>{block.title}</Accordion.Header>
                <Accordion.Body>
                  <ul className='text-secondary'>
                    {block.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Card.Body>
      </Card>
    </section>
  )
}

export default WorkoutPlans
