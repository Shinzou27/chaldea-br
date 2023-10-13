function Iframe({ src }) {
    return (<div className="video-container">
        <iframe src={src} className="responsive-iframe"></iframe>
    </div>);
}

export default Iframe;