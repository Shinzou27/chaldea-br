import Container from 'react-bootstrap/Container'
import Image from "react-bootstrap/esm/Image";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ChibiSelector from '../layout/team/ChibiSelector';
import ChapterDisplay from '../layout/team/ChapterDisplay';
import BadgeModal from '../layout/team/BadgeModal';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { data as chapterInfo } from '../../assets/static_data.json'
import './Team.css'


function Team() {
    const [translatorsData, setTranslatorsData] = useState();
    const [highlightChapters, setHighlightChapters] = useState([]);
    const [highlightTranslator, setHighlightTranslator] = useState({});
    const [testId, setTestId] = useState();
    const [badgeChapter, setBadgeChapter] = useState("");
    const [showBadgeModal, setShowBadgeModal] = useState(false);
    const [isPresent, setIsPresent] = useState();
    const chapters = chapterInfo;
    useEffect(() => {
        const config = {
            transformResponse: [function (data) {
                const payload = JSON.parse(data).filter((element) => element['Gundakos'] != undefined).map((element) => {
                    if (element.Gundakos.includes("->")) {
                        element.Gundakos = element.Gundakos.split(" -> ")[1];
                    }
                    if (element.Tradutor.includes(" / ")) {
                        element.Tradutor = element.Tradutor.split(" / ")[0];
                    }
                    return {
                        id: parseInt(element.ID),
                        name: element.Tradutor,
                        servant: element.Gundakos,
                        total: parseInt(element.total),
                        chaptersString: element.string
                    };
                });
                return payload;
            }]
        }
        axios.get('https://opensheet.elk.sh/11E0aTF0DIx3nzDX2Cj0EpbxKJf5alndmkRMbAma0bIk/team', config).then((response) => {
            setTranslatorsData(response.data);
            //setHighlightTranslator();
            setHighlightChapters(highlightTranslator.chaptersString); //.split('').map((item) => item == 'Y' ? true : false)
        });
    }, [])
    function handleModal(id, isPresent) {
        setBadgeChapter(chapters[id].title);
        setShowBadgeModal(true);
        setIsPresent(isPresent);
    }
    return (
        <Container className='w-100' fluid>
            <h1 className='pt-5 mt-2'>Nossa Equipe!</h1>
            <Container>
                {(translatorsData) &&
                    <Row>
                        <BadgeModal translator={translatorsData.filter((translator) => translator.id == testId)[0]} chapter={badgeChapter} isPresent={isPresent} show={showBadgeModal} setShow={setShowBadgeModal} />
                        <Col md={4}>
                            <ChibiSelector data={translatorsData} highlight={translatorsData.filter((translator) => translator.id == testId)[0]} handleHighlight={(id) => setTestId(id)} />
                        </Col>
                        <Col md={8}>
                            <ChapterDisplay chapters={translatorsData.filter((translator) => translator.id == testId)[0]?.chaptersString.split('').map((item) => item == 'Y' ? true : false)} handleModal={handleModal} />
                        </Col>
                    </Row>
                }
            </Container>
        </Container>
    );
}

export default Team;