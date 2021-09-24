
import Banniere1 from "../components/molecules/Banniere1";
import PageMarketingSectionAccueil from "../components/molecules/PageMarketingSectionAccueil";
import PageMarketingSectionPackage1 from "../components/molecules/PageMarketingSectionPackage1";
import PageMarketingSectionPackage2 from "../components/molecules/PageMarketingSectionPackage2";
import PageMarketingSectionProspecte from "../components/molecules/PageMarketingSectionProspecte";
import PageWebSectionAccueil from "../components/molecules/PageWebSectionAccueil";
import PageWebSectionPackage1 from "../components/molecules/PageWebSectionPackage1";

const Index = (props) => {
  return (
    <>
      <PageWebSectionAccueil />
      <Banniere1 />
      <PageWebSectionPackage1 className="py-2 py-md-5 px-2 px-md-0" />
    </>
  );
};


export default Index;
