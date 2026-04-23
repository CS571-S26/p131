import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import DailySchedule from './pages/DailySchedule'
import HabitTrackerPage from './pages/HabitTrackerPage'
import Home from './pages/Home'
import ProgressTips from './pages/ProgressTips'
import WorkoutPlans from './pages/WorkoutPlans'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/workout' element={<WorkoutPlans />} />
        <Route path='/schedule' element={<DailySchedule />} />
        <Route path='/progress' element={<ProgressTips />} />
        <Route path='/tracker' element={<HabitTrackerPage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Layout>
  )
}

export default App
