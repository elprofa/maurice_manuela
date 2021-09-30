import Banniere1 from "../components/molecules/Banniere1";
import PageWebSectionAccueil from "../components/molecules/PageWebSectionAccueil";
import PageWebSectionPackage from "../components/molecules/PageWebSectionPackage";
import PageWebSectionPackage1 from "../components/molecules/PageWebSectionPackage1";

const developpement = (props) => {

  return (
    <>
      <PageWebSectionAccueil />
      <Banniere1 className="my-2 my-md-5"/>
      <PageWebSectionPackage1 className="py-2 py-md-5 px-2 px-md-0" />
      <PageWebSectionPackage className="py-2 py-md-5 px-2 px-md-0"/>
    </>
  );
};


export default developpement;
