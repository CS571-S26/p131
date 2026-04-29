type SectionHeadingProps = {
  label: string
  title: string
  description: string
}

const SectionHeading = ({ label, title, description }: SectionHeadingProps) => (
  <div className='mb-4'>
    <p className='text-uppercase text-success fw-semibold mb-1 tracking-wide'>{label}</p>
    <h2 className='h3 fw-bold text-white'>{title}</h2>
    <p className='text-secondary'>{description}</p>
  </div>
)

export default SectionHeading
