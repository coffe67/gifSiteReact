import { useState, useEffect } from "react"
import { getRemoteGifs } from "../helpers/getRemoteGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    const [items, setItems] = useState([])

    useEffect(() =>{       

        getRemoteGifs(category).then((data) =>{            
            setState({data:[...items, ...data], loading:false})
        })       

    }, [category])

    return state
}

