import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import SectionHeading from '../components/SectionHeading'

const tipBuckets = [
  {
    title: 'Recovery & Mobility',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80&fit=crop&auto=format',
    imageAlt: 'Woman doing yoga meditation on a wooden floor, representing rest and recovery practices',
    text: 'Short flows + breathwork reduce soreness and help you stay consistent.',
    tips: [
      'Follow the 8-minute mobility reset built into the tracker.',
      'Use contrast showers or hot/cold packs on heavy lift days.',
      'Schedule one longer yoga class every weekend to celebrate progress.',
    ],
  },
  {
    title: 'Nutrition & Hydration',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&fit=crop&auto=format',
    imageAlt: 'Bowl of fresh vegetables and nutritious healthy food, representing mindful eating habits',
    text: 'Fueling is 50% of the challenge. Prep once, eat mindful plates all week.',
    tips: [
      'Anchor each meal with protein, colorful plants, and smart carbs.',
      'Sip 12 oz of water immediately after each tracker check-in.',
      'Batch overnight oats or chia pudding for early mornings.',
    ],
  },
  {
    title: 'Consistency & Mindset',
    image:
      'https://images.unsplash.com/photo-1689877020200-403d8542d95d?w=600&q=80&fit=crop&auto=format',
    imageAlt: 'A fully equipped gym with training machines and weights, representing commitment to the challenge',
    text: 'Behavior change happens by celebrating the tiny wins, not just PRs.',
    tips: [
      'Three misses? Revisit the schedule page and adjust the plan instead of quitting.',
      'Use the tracker notes field (coming soon) to log gratitude or lessons.',
      'Share weekly screenshots of the progress bar to keep yourself accountable.',
    ],
  },
]

const faqs = [
  {
    question: 'How do I scale workouts if I am limited on time?',
    answer:
      'Use the workout cards to pick one strength and one core circuit. You can finish in 18 minutes and still check off the day.',
  },
  {
    question: 'Do I need equipment?',
    answer:
      'No. Dumbbells are optional. Every circuit lists a bodyweight alternative and the tips page links to mobility flows that require only a mat.',
  },
  {
    question: 'Where do I track bonus habits?',
    answer:
      'The tracker covers the essentials. Use the Daily Schedule notes section for extras such as journaling or cold plunges.',
  },
]

const ProgressTips = () => {
  return (
    <section>
      <SectionHeading
        label='Progress tips'
        title='Recovery, nutrition, and mindset.'
        description='These are the support pillars students asked for during usability interviews. Keep them nearby when the motivation dips.'
      />
      <Row className='g-4 mb-4'>
        {tipBuckets.map((bucket) => (
          <Col md={4} key={bucket.title}>
            <Card className='h-100 shadow-sm'>
              <Card.Img
                variant='top'
                src={bucket.image}
                alt={bucket.imageAlt}
                className='tip-card-img'
              />
              <Card.Body>
                <p className='text-uppercase text-success small fw-semibold mb-2'>{bucket.title}</p>
                <p className='text-secondary'>{bucket.text}</p>
                <ul className='text-secondary small'>
                  {bucket.tips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Card className='shadow-sm'>
        <Card.Body>
          <p className='text-uppercase text-success fw-semibold mb-2'>FAQ</p>
          <h3 className='h4 fw-bold text-white'>Still curious?</h3>
          <Accordion className='mt-3'>
            {faqs.map((faq, index) => (
              <Accordion.Item eventKey={String(index)} key={faq.question}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Card.Body>
      </Card>
    </section>
  )
}

export default ProgressTips
