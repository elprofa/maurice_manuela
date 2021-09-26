import PageAccueilSectionAccueil from "../components/molecules/PageAccueilSectionAccueil";
import PageAccueilSectionClient from "../components/molecules/PageAccueilSectionClient";
import PageAccueilSectionEquipe from "../components/molecules/PageAccueilSectionEquipe";
import PageAccueilSectionProjet from "../components/molecules/PageAccueilSectionProjet";
import PageAccueilSectionService from "../components/molecules/PageAccueilSectionService";
import SectionContact from "../components/molecules/SectionContact";
import Styled from 'styled-components';

const SectionStc=Styled.section`
  background:#fbf9f8;
`;

const Index = (props) => {

  return (
    <>
      <PageAccueilSectionAccueil />
      <SectionStc className="">
        <PageAccueilSectionService className="py-2 py-md-5"/>
        <PageAccueilSectionProjet className="py-2 py-md-5"/>
      </SectionStc>
      <PageAccueilSectionClient className="py-2 py-md-5"/>
      
      <PageAccueilSectionEquipe className="py-2 py-md-5"/>
      <SectionContact className="py-2 py-md-5"/>

    </>
  );
};


export default Index;
