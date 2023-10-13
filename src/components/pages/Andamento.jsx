import ChapterTable from '../layout/ChapterTable';
import Container from 'react-bootstrap/esm/Container';

import './Andamento.css'
function Andamento() {
    return (
        
        <Container className='mt-5'>
            <h1 className='py-5 container-table'>Andamento do projeto</h1>
            <ChapterTable/>
        </Container>
    );
}

export default Andamento;