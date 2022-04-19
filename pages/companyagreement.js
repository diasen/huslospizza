import Footercomponent from '../components/footer/Footercomponent';
import Headercomponent from '../components/header/Headercomponent';
import Agreementheading from '../components/companyagreement/Agreementheading';
import Agreementform from '../components/companyagreement/Agreementform';

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
