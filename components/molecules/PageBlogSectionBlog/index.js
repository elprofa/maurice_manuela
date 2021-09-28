import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import Bouton from '../../shared/Bouton';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import CardBlog from '../CardBlog';
import PageBlogSectionBlogStc from './PageBlogSectionBlog.stc'

function PageBlogSectionBlog() {
    return (
        <PageBlogSectionBlogStc>
           <Container>
            <Row className="pt-0 pt-md-5 mt-0 mt-md-5">
                    <Col lg={4}>
                        <CardBlog theme={1} title={
                            <>
                                <span>COMMENT</span> AUGMENTER LE TRAFFIC <span> DE VOTRE SITE </span> WEB
                            </>
                            } 
                            texte={
                                <>Nos conseil pour augmenter le traffic de votre site web</>
                            }
                            date={
                                <>17 Juin 2021</>
                            }
                        />
                    </Col>
                    <Col lg={4}>
                        <CardBlog theme={2} title={
                            <>
                                <span>COMMENT</span> AUGMENTER LE TRAFFIC <span> DE VOTRE SITE </span> WEB
                            </>
                            } 
                            texte={
                                <>Nos conseil pour augmenter le traffic de votre site web</>
                            }
                            date={
                                <>17 Juin 2021</>
                            }
                        />
                    </Col>
                    <Col lg={4}>
                        <CardBlog theme={1} title={
                            <>
                                <span>COMMENT</span> AUGMENTER LE TRAFFIC <span> DE VOTRE SITE </span> WEB
                            </>
                            } 
                            texte={
                                <>Nos conseil pour augmenter le traffic de votre site web</>
                            }
                            date={
                                <>17 Juin 2021</>
                            }
                        />
                    </Col>
                    <Col lg={4}>
                        <CardBlog theme={2} title={
                            <>
                                <span>COMMENT</span> AUGMENTER LE TRAFFIC <span> DE VOTRE SITE </span> WEB
                            </>
                            } 
                            texte={
                                <>Nos conseil pour augmenter le traffic de votre site web</>
                            }
                            date={
                                <>17 Juin 2021</>
                            }
                        />
                    </Col>
                    <Col lg={4}>
                        <CardBlog theme={1} title={
                            <>
                                <span>COMMENT</span> AUGMENTER LE TRAFFIC <span> DE VOTRE SITE </span> WEB
                            </>
                            } 
                            texte={
                                <>Nos conseil pour augmenter le traffic de votre site web</>
                            }
                            date={
                                <>17 Juin 2021</>
                            }
                        />
                    </Col>
                    <Col lg={4}>
                        <CardBlog theme={1} title={
                            <>
                                <span>COMMENT</span> AUGMENTER LE TRAFFIC <span> DE VOTRE SITE </span> WEB
                            </>
                            } 
                            texte={
                                <>Nos conseil pour augmenter le traffic de votre site web</>
                            }
                            date={
                                <>17 Juin 2021</>
                            }
                        />
                    </Col>
                </Row>
           </Container>
        </PageBlogSectionBlogStc>
    )
}

export default PageBlogSectionBlog
