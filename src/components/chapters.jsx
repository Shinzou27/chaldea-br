import axios from 'axios'
import { useEffect, useState } from 'react';


const sentinels = {
    "1": {
        START: 1,
        END: 9,
    },
    "1.5": {
        START: 12,
        END: 16
    },
    "2": {
        START: 19,
        END: 31
    },
    "2.5": {
        START: 33,
        END: 36
    }
}

function chapters() {
    const [chapters, setChapters] = useState([]);
    useEffect(() => {
        const config = {
            transformResponse: [function (data) {
                const payload = JSON.parse(data).filter((element) => element['Index Chaldea BR 2.0'] != undefined).map((element) => {
                    return {
                        title: element['Index Chaldea BR 2.0'],
                        progress: element['Progresso'],
                        state: element['State'],
                        launchDate: element['Data de Lançamento'],
                    }
                });
                return payload;
            }]
        }
        axios.get('https://opensheet.elk.sh/11E0aTF0DIx3nzDX2Cj0EpbxKJf5alndmkRMbAma0bIk/home', config).then((response) => {
            setChapters(response.data);
        });
        return;
    }, []);
    chapters.map((chapter) => {
        if (chapter.state == 'On App') {
            chapter.state = 'Disponível';
        } else if (chapter.state == 'Working') {
            if (chapter.progress != '0,00%' && chapter.progress != '') {
                chapter.state = 'Em tradução';
            } else {
                chapter.state = 'Indisponível';
            }
        } else {
            chapter.state = 'Em revisão';
        }
    });
    let othersIndex = 0;
    for(let i = sentinels[2].END; i < chapters.length; i++) {
        if(chapters[i].state == 'Indisponível' && chapters[i].progress == '0,00%' || chapters[i].progress == '#REF!' || chapters[i].progress == 'DATA LOST') {
            chapters.splice(i, 1);
            i--;
        }
        if (othersIndex <= i && othersIndex > 0) {
            chapters.splice(i, 1);
            i--;
        } else if (chapters[i].title == 'Outros') {
            chapters.splice(i, 1);
            i--;
            othersIndex = i;
        }
    }
    return [chapters, sentinels];
}

export default chapters;