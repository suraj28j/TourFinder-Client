import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        fetcData()
    },[]);

    const fetcData = async () => {

        setLoading(true);

        try {
            const res = await fetch(url);

            if (!res.ok) {
                setError("Failed to fetch data");
            }

            const result = await res.json();
            console.log("result",result.data);
            
            setData(result.data);

            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }
    return {
        data,
        error,
        loading
    }
}

export default useFetch
