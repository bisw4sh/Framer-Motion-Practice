import Page from './comp/Page.jsx'
import Transit from './comp/Transit.jsx'
import ShapeShifter from './comp/ShapeShifter.jsx'

const App = () => {

  return (
    <div className="h-max flex flex-col justify-center items-center bg-teal-300">

      <Page data={'First'}/>
      <Page data={'Second'}/>
      <Page data={'Third'}/>
      <Page data={'Fourth'}/>
      <Page data={'Fifth'}/>

      <Transit />

      <ShapeShifter />

    </div>
  )
}

export default App