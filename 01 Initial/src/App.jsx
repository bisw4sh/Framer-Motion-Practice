import Page from './comp/Page.jsx'
import Transit from './comp/Transit.jsx'
import ShapeShifter from './comp/ShapeShifter.jsx'
import BorderRadius from './comp/BorderRadius.jsx'
import Gesture from './comp/Gesture.jsx'
import DropDown from './comp/DropDown.jsx'

const App = () => {

  return (
    <div className="h-max flex flex-col justify-center items-center bg-teal-300">

      <Page data={'First'}/>
      <Page data={'Second'}/>
      <Page data={'Third'}/>

      <Transit />
      <ShapeShifter />
      <BorderRadius />
      <Gesture />
      <DropDown />

    </div>
  )
}

export default App