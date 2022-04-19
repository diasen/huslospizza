import Footercomponent from './components/footer/Footercomponent';
import Headercomponent from './components/header/Headercomponent';
import Agreementform from './components/companyagreement/Agreementform';
import Agreementheading from './components/companyagreement/Agreementheading';

function Companyagreement() {
  return (
    <div>
      <Headercomponent />
      <Agreementheading />
      <Agreementform />
      <Footercomponent />
    </div>
  );
}

export default Companyagreement;
