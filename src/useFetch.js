import { useState, useEffect } from 'react';

const useFetch = ( url ) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(resp => {
            if (!resp.ok) {
                throw Error('could not fetch data for that resource');
            } 
            return resp.json();
            })
        .then(data => {
            setData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch(err => {
            setError(err.message);
            setIsLoading(false);
        });
    }, [url]); 

    return {
        data,
        isLoading,
        error
    }
};

export default useFetch;

