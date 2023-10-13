import frameTop from '../../../../public/static/img/chapter/frameTop.png'
import frameBottom from '../../../../public/static/img/chapter/frameBottom.png'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/esm/Container';

function ChapterDescription({title, desc}) {
    return ( 
        <Container className='container-desc'>
            <Image className='frames' width={600} src={frameTop}/>
            <h6>{title}</h6>
            <p className='fs-5'>{desc != '' ? desc:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, iure. Distinctio consequatur laudantium vel saepe, explicabo reiciendis dignissimos? Animi incidunt aperiam ad quia, accusantium aliquam vero praesentium libero. Aspernatur, asperiores?"}</p>
            <Image className='frames' width={600} src={frameBottom}/>
        </Container>
     );
}

export default ChapterDescription;