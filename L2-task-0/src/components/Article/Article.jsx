import "./Article.css";

// returns a container with Artibles
const Article = ({data}) => {
    console.log("Article got data: ")
    console.dir(data)

    return (
        <section>
            <h3>{data.title}</h3>
            <p>{ data.body}</p>
        </section>
    )
}

export default Article