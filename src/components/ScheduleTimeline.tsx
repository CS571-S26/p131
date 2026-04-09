import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'

export type ScheduleEntry = {
  time: string
  title: string
  focus: string
  notes: string
}

type ScheduleTimelineProps = {
  entries: ScheduleEntry[]
}

const ScheduleTimeline = ({ entries }: ScheduleTimelineProps) => {
  return (
    <Stack gap={3}>
      {entries.map((entry) => (
        <Card key={entry.time} className='schedule-card shadow-sm border-0'>
          <Card.Body className='d-flex flex-column flex-md-row align-items-start gap-3'>
            <div className='schedule-time text-uppercase fw-bold text-success'>{entry.time}</div>
            <div>
              <p className='mb-1 h5 text-white'>{entry.title}</p>
              <p className='mb-2 text-secondary small'>{entry.focus}</p>
              <p className='mb-0 text-white'>{entry.notes}</p>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Stack>
  )
}

export default ScheduleTimeline
