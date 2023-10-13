import { v4 as uuidv4 } from 'uuid'
import Table from 'react-bootstrap/Table'
import TableRow from './TableRow';
import chapters from '../chapters';
import Image from 'react-bootstrap/esm/Image';
import loading from '../../assets/loading.svg';

function ChapterTable() {
    const chaptersArray = chapters()[0];
    return (
        <div>
            {chaptersArray.length > 0 ?
                <Table className='ch-table' striped={true} bordered hover variant="dark">
                    <thead>
                        <tr className='fs-2'>
                            <th className='container-table'>Capítulo</th>
                            <th className='px-5 container-table'>Progresso</th>
                            <th className='px-5 container-table state'>Estado</th>
                            <th className='px-5 container-table launch'>Lançamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chaptersArray.map((chapter) =>
                            (<TableRow key={uuidv4()} chapter={chapter} />)
                        )}
                    </tbody>
                </Table>
                :
                <div>
                    <h1>Carregando...</h1>
                    <Image src={loading} />
                </div>
            }
        </div>
    );
}

export default ChapterTable;