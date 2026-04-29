import Card from 'react-bootstrap/Card'

type HighlightCardProps = {
  title: string
  description: string
  bullets: string[]
  accent: 'success' | 'primary' | 'warning'
}

const HighlightCard = ({ title, description, bullets, accent }: HighlightCardProps) => (
  <Card className={`h-100 shadow-sm highlight-card highlight-card--${accent}`}>
    <Card.Body>
      <span className={`badge bg-${accent} text-uppercase mb-2`}>{title}</span>
      <p className='fw-semibold text-white'>{description}</p>
      <ul className='ps-3 text-secondary small mb-0'>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </Card.Body>
  </Card>
)

export default HighlightCard
