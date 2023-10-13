function TableRow({ chapter }) {
    const isTitle = (['Arco', 'Even'].includes(chapter.title.slice(0, 4)) || chapter.title == 'Interludes e Trial Quests') ? true : false;
    return (
        <>
            {isTitle ?
                <tr>
                    <td colSpan={4} className="fw-bold py-4 fs-4">{chapter.title}</td>
                </tr>
                :
                chapter.title.slice(0, 5) == 'Total' ?
                    <tr>
                        <td>{chapter.title}</td>
                        <td colSpan={3}>{chapter.progress}</td>
                    </tr> :
                    <tr>
                        <td>{chapter.title}</td>
                        <td>{chapter.progress}</td>
                        <td className="state">{chapter.state}</td>
                        <td className="launch">{chapter.launchDate}</td>
                    </tr>
            }
        </>
    );
}

export default TableRow;