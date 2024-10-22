import "./Main.css";
import Articles from "../../components/Articles/Articles.jsx";


const Main = ({data}) => {
    // console.log("Main is called")
    return (
        <main className="Main">
            <h1>Built-in React Hooks</h1>
            <p><em>Hooks</em> let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. This page lists all built-in Hooks in React.</p>
            
           <Articles data={data}/>
          
        </main>
    )
}

export default Main