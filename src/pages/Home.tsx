import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import HighlightCard from '../components/HighlightCard'
import HeroSection from '../components/HeroSection'

const highlights = [
  {
    title: 'Challenge Rules',
    description: 'Three anchors per day keep the routine bite-sized.',
    bullets: [
      'Movement: pick your workout block from the plans page.',
      'Recovery: mobility, hydration, or journaling focus daily.',
      'Reflection: track habits + note one win in the tracker.',
    ],
    accent: 'success' as const,
  },
  {
    title: 'Weekly Rhythm',
    description: 'Balanced split rotates focus for sustainable gains.',
    bullets: [
      'Mon/Wed/Fri: strength or HIIT, capped at 35 minutes.',
      'Tue/Thu: mobility & active recovery circuit.',
      'Sat/Sun: long walk, yoga, or intentional rest.',
    ],
    accent: 'primary' as const,
  },
  {
    title: 'Motivation System',
    description: 'Checklist + progress bar provides instant feedback.',
    bullets: [
      'Habits auto-update a progress bar for quick dopamine hits.',
      'Daily view lets you reset every morning to stay consistent.',
      'Wins archive (coming next) will spotlight streaks.',
    ],
    accent: 'warning' as const,
  },
]

const Home = () => {
  return (
    <>
      <HeroSection />
      <section className='py-4'>
        <Row className='g-4'>
          {highlights.map((highlight) => (
            <Col md={4} key={highlight.title}>
              <HighlightCard {...highlight} />
            </Col>
          ))}
        </Row>
      </section>
    </>
  )
}

export default Home
