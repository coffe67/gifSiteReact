import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifList } from "./components/GifList";
const GifApp = () =>{
    // const categories = ["Cat 1", "Cat 2", "Cat 3"];
    const [categories, setCategory] = useState(["Sports"])
    
    return (
        <>
            <h2>Gif App</h2>
            <hr/>
            <AddCategory setCategory={setCategory} />
            
            <div>
              {
                  categories.map( category =>{
                    return <GifList category={category}/>                      
                  })
              }
            </div>  
        </>
    )
}

export default GifApp;