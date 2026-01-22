import { PersonalInformation, EducationalBackground } from './Sulit'
import './App.css'

function App() {
  return (
    <>
      <PersonalInformation
        firstName="Leona Anne"
        middleName="Oxina"
        lastName="Sulit"
        address="Mamburao, Occidental Mindoro"
        birthdate="January 4, 2005"
      />

      <EducationalBackground
        elementary="Wawa Elementary School"
        elementaryYear="2025"
        juniorHigh="Abra De Ilog High School"
        juniorHighYear="2025"
        seniorHigh="Abra De Ilog Senior High School"
        seniorHighYear="2025"
        college="Mamburao"
        collegeYear="2025"
      />
    </>
  )
}

export default App

