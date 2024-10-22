export const Topics = ({data}) => {
    console.log("topics: ")
    console.dir(data)

    return (
        <ul>
            {data.map( (item, idx) => 
            ( <li key={idx}>
                 <a  href={item.href}>{item.title}</a>
                </li>

            )
        )}
        </ul>)
}