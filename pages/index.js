import PageAccueilSectionAccueil from "../components/molecules/PageAccueilSectionAccueil";
import PageAccueilSectionClient from "../components/molecules/PageAccueilSectionClient";
import PageAccueilSectionEquipe from "../components/molecules/PageAccueilSectionEquipe";
import PageAccueilSectionProjet from "../components/molecules/PageAccueilSectionProjet";
import PageAccueilSectionService from "../components/molecules/PageAccueilSectionService";

const Index = (props) => {
  return (
    <>
      <PageAccueilSectionAccueil />
      <PageAccueilSectionService className="py-2 py-md-5"/>
      <PageAccueilSectionProjet className="py-2 py-md-5"/>
      <PageAccueilSectionClient className="py-2 py-md-5"/>
      <PageAccueilSectionEquipe className="py-2 py-md-5"/>
    </>
  );
};


export default Index;
