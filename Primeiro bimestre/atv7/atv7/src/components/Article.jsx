export default function Article(props) {
    return (
        <main>
            <article>
                <h2>{props.titulo}</h2>

                <p>
                    <time dateTime={props.dataISO}>{props.dataLegivel}</time>
                </p>

                <p>{props.paragrafo1}</p>
                <p>{props.paragrafo2}</p>
                <p>{props.paragrafo3}</p>

                <figure>
                    <img src={props.imgSrc} alt={props.imgAlt} />
                    <figcaption>{props.imgLegenda}</figcaption>
                </figure>
            </article>
        </main>
    );
}