import Footercomponent from './components/footer/Footercomponent';
import Headercomponent from './components/header/Headercomponent';
import Aboutcontent from './components/about/Aboutcontent';

function About() {
  return (
    <div>
      <Headercomponent />
      <Aboutcontent />
      <Footercomponent />
    </div>
  );
}

export default About;
