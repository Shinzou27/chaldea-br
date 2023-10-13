import Image from 'react-bootstrap/esm/Image';

import './Char.css'
function CharacterCard({ chapter, src }) {
    return (
        <div id='char' >
            <div id='inner-div' className='reveal'>
                <Image className='img' src={`../../src/assets/chapter/servants/${chapter.id + src}.png`} />
                <p id='name'>{chapter.char_name[src-1]}</p>
            </div>
        </div>
    );
}

export default CharacterCard;