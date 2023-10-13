import { useParams } from "react-router-dom";
import ChapterDescription from "../layout/chapter/ChapterDescription";
import CharacterCard from "../layout/chapter/CharacterCard";
import ChapterInfo from "../layout/chapter/ChapterInfo";
import Timestamps from "../layout/chapter/Timestamps";
import { data } from '../../assets/static_data.json'
import Iframe from "../layout/Iframe";
import Container from 'react-bootstrap/Container'
import Image from "react-bootstrap/esm/Image";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Capitulo() {
    const { arc, title } = useParams();
    const chapter = data[title];
    function reveal() {
        let reveals = document.querySelectorAll(".reveal");
      
        for (let i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let elementTop = reveals[i].getBoundingClientRect().top;
          let elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);
      window.addEventListener("load", reveal);
    /*//Descrição precisa ter: 1- Nome do capítulo | 2 - Personagens iniciais | 3 - Contexto do local | 4 - Breve descrição da história
    //Fuyuki é a primeira Singularidade de Fate/Grand Order, onde toda a história da Chaldea começa a ser contada. Fujimaru Ritsuka, Mash Kyrielight e Olga Marie Animusphere, desmaiam e acordam num cenário em chamas, sem comunicação com o mundo exterior e precisam voltar à Chaldea para corrigir a Incineração da Humanidade.
    //Orleans é a primeira "Ordem" que a Chaldea recebe, para restaurar a Singularidade localizada na França da época da Guerra dos Cem Anos. Lá, acabam presenciando a aparição constante de dragões e precisam enfrentar Jeanne d'Arc Alter, a causadora da Singularidade, para prosseguir em sua jornada.
    //Septem se passa no Império Romano, durante o governo de Nero Claudius, e a Singularidade é causada por atritos políticos no império. Nero Claudius precisa, portanto, unir seu povo e nós, recuperar o Santo Graal.
    //Em Okeanos, fomos jogados diretamente num navio no meio do mar e precisamos, primeiramente, saber onde estamos, pois para onde quer que se olhe, há apenas água. Posteriormente, sabemos que estamos na época das Grandes Navegações e que está havendo uma grande guerra para a obtenção do Graal.
    //Londres é a terra da Associação dos Magos, localizada na Torre do Relógio - seria inevitável não ocorrer uma Singularidade lá. Quando chegamos na capital inglesa, presenciamos uma névoa venenosa causada por algum Espírito Heroico e, após superá-la, conseguimos nos estabelecer com um grupo de aliados para descobrir os segredos desta Londres da Segunda Revolução Industrial.
    //E Pluribus Unum - "De muitos, um". O lema dos Estados Unidos da América, local onde a Quinta Singularidade ocorre, dá nome ao capítulo. Durante a história, nos encontramos com muitos Espíritos Heroicos que exploram as terras americanas após a Revolução Americana.
    //Camelot se passa na terra sagrada de Jerusalém e retrata uma distopia do governo do Rei Leão, líder da Távola Redonda. Somos enviados para corrigir esta Singularidade, derrubar o governo opressor e extrair o Santo Graal.
    //Babylonia é a última das Ordens da Chaldea, mas também a mais difícil. Passando-se na Mesopotâmia, a Era dos Deuses ainda imperava e deuses viviam livremente pelo mundo. Com isso, a Chaldea encontrará inimigos de níveis totalmente diferentes, o que tornará a tarefa de corrigir a Singularidade e recuperar o Santo Graal ainda mais complicada.
    //Solomon é a Singularidade Final e se passa no Templo Atemporal, onde o Rei Salomão está aguardando a Chaldea para o combate final, direto e definitivo.
    // Shinjuku é o primeiro dos "Epic of Remnant", arco que segue os feitos de Fujimaru Ritsuka e Mash Kyrielight na restauração pela Ordem Humana. O capítulo se passa na Shinjuku de 1999, que apesar de estar ocorrendo uma Singularidade minúscula sem apresentar qualquer perigo à humanidade, a Chaldea ainda decide corrigi-la. Lá, reencontram saudosos Espíritos Heroicos, como Jeanne d'Arc Alter e Artoria Alter que a ajudam com seu objetivo.
    //Agartha é a segunda Singularidade que decidimos corrigir por conta própria e se passa no território de Agartha, abaixo da terra.
    //Shimousa é a terceira Singularidade dos "Epic of Remnant" e se passa no território de Shimousa-no-Kuni, Japão, no período Kan'nei. Enquanto conversamos com Mash e outros Servos japoneses, Fujimaru acaba desmaiando e, ao acordar, percebe que não está mais na Chaldea. Ao menos, também vê que uma bela samurai está ao seu lado e numa situação parecida com a sua. Juntos, tentam descobrir onde estão, quando estão e o quê precisam enfrentar para seguir suas jornadas!
    //Salem é a última Singularidade dos "Epic of Remnant", e se passa na vila de Salém, nos EUA. Conhecida por ser uma região repleta de ocultismo e história de bruxas, dia após dia, cada vez mais acontecimentos misteriosos são presenciados pela Chaldea.
    //Após superarem Atlantis, a Chaldea chega na Cidade Montanhosa Interestelar do Olimpo. Nela, estão os adversários mais poderosos: os deuses do Olimpo. Zeus, seu líder, é um deus onipotente e pode nos aniquilar facilmente com um de seus raios. Além disso, ainda há o líder dos Crypters, Kirschtaria Wodime, que anteriormente derrotou a Chaldea com um único golpe. Esta será a batalha mais árdua que a Chaldea jamais poderia combater.
    //No Japão, uma Singularidade surge imediatamente após a queda do Olimpo: Heian-kyo. Chegando na capital, Heian, reconhecemos alguns Espíritos Heroicos e percebemos que estão participando de uma guerra: a Guerra Imperial do Santo Graal, que foi planejada por alguém que também conhecemos muito bem.
    //Um cenário utópico, extremamente repleto de energia mágica: este é o domínio das fadas da Britânia, Avalon le Fae. Num Lostbelt cuja Árvore do Vazio já não mais dará frutos, uma ameaça planetária surge e torna a correção desta versão da história uma tarega de extrema prioridade.
    //Um santuário de animais e criaturas não-humanas presente na Terra Esbranquiçada, atuando como um Campo Limitado. Este é o domínio de Koyanskaya, e adentrá-lo é como adentrar seu próprio Núcleo Espiritual. Porém, apesar das dificuldades, este santuário não deveria existir na terra e, portanto, será tarefa da Chaldea corrigi-lo.
    //Uma guerra eterna de três facções: Vingança, Via Régia e Restauração. Numa Singularidade onde todos os habitantes são Servos, algo - ou alguém - certamente está por trás disso tudo e muitos segredos ainda hão de ser revelados antes de partirmos para o último Lostbelt.
    //Não sei nada de Nahui Mictlán. Tem dinossauros, Neminhos e o Kirei.
    */
    return (
        <Container className="mt-5">
            <Container className="chapter-title pt-4">
                <Image width={128} src={`../../src/assets/icons/${chapter.id}.png`} />
                <h1>{chapter.title.toLocaleUpperCase()}</h1>
            </Container>
            <Row className="pb-5">
                <Col className="pt-2">
                    <CharacterCard chapter={chapter} src={1} />
                </Col>
                <Col className="pt-2">
                    <ChapterDescription title={chapter.title.toLocaleUpperCase()} desc={chapter.desc} />
                </Col>
            </Row>
            <hr />
            <h1 className="py-2">Informações do Capítulo</h1>
            <Row>
                <Col sm={8}>
                    <ChapterInfo chapter={chapter} />
                </Col>
                <Col sm={4}>
                    <CharacterCard chapter={chapter} src={2} />
                </Col>
            </Row>
            <hr />
            {chapter.yt_link != '' &&
                <>
                    <Container>
                        <h1 className="py-4">História</h1>
                        <Iframe src={chapter.yt_link} />
                    </Container>
                    <Container>
                        <h1 className="py-4">Timestamps</h1>
                        <Row>
                            <Col md={6}>
                                <CharacterCard chapter={chapter} src={3} />
                            </Col>
                            <Col md={6}>
                                <Timestamps timestamps={data.shinjuku.timestamps} />
                            </Col>
                        </Row>
                        <hr />
                    </Container>
                </>
            }
                {chapter.trailer != '' && chapter.trailer != undefined ?
                    <Container>
                        <h1 className="py-4">Trailer</h1>
                        <Iframe src={chapter.trailer ? chapter.trailer : 'https://www.youtube.com/embed/AGUCAFJenxM'} />
                    </Container> :
                    <h2 className="pt-5">Não há trailers disponíveis para este capítulo. <br /> :(</h2>}
        </Container>
    );
}

export default Capitulo;