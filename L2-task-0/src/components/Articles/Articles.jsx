import "./Articles.css";
import Article from "../Article/Article.jsx";

const Articles = ({data}) => {
    
    return  data.map((item, idx) => 
       <Article key={idx} data={item}/>
    )
}
export default Articles