import PageLayout from "app/components/layout/PageLayout";
import FormBox from "app/components/layout/FormBox";
import FromWSLPForm from "app/components/parts/FromWSLPForm";

const ToWSLP: React.FC = () => (
  <PageLayout
    title="WSLP (ERC20) - SLP Route"
    description={
      <>
        Return SLP tokens
        <br /> to the base
      </>
    }
  >
    <FormBox className="my-12">
      <FromWSLPForm />
    </FormBox>
  </PageLayout>
);

export default ToWSLP;
