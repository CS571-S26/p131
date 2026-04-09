import type { ReactNode } from 'react'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import NavigationBar from './NavigationBar'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='app-layout d-flex flex-column min-vh-100'>
      <NavigationBar />
      <Stack as='main' className='flex-grow-1 py-4'>
        <Container fluid='md'>{children}</Container>
      </Stack>
      <footer className='app-footer mt-auto py-4 text-center text-white'>
        <Container fluid='md'>
          <p className='mb-1 fw-semibold tracking-wide text-uppercase'>
            30-Day Fitness Challenge & Wellness Club
          </p>
          <p className='mb-0 small text-white-50 tracking-wide'>
            Fitness Tracking Website Created by Rahul Kanera, and Hriday Sethi
          </p>
        </Container>
      </footer>
    </div>
  )
}

export default Layout
