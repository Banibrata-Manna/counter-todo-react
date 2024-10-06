import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import {FifthComponent} from './FirstComponent';

export default function LearningComponents() {
  return (
    <div className="LearningComponents">
     <FirstComponent></FirstComponent>
     <SecondComponent></SecondComponent>
     <ThirdComponent></ThirdComponent>
     <FourthComponent></FourthComponent>
     <FifthComponent />
     </div>
  );
}