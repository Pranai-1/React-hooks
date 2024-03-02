import { memo } from "react"

 function Search({onChange}:{onChange:(text:string)=>void}){
    console.log("rendered")
    return(
        <input
        placeholder="search here.."
        onChange={(e)=>onChange(e.target.value)}
        className="p-2 rounded-lg "
        />
    )
}

export default memo(Search)

//memo():-The memo function is a higher-order component provided by React that is used for optimizing functional 
//components by memoizing their rendering. When you wrap a functional component with memo, React will only re-render the
// component if its props have changed. If the props remain the same, 
//React will reuse the previously rendered result, improving performance by preventing unnecessary re-renders.