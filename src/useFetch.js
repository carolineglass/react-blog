import { useState, useEffect } from 'react';

const useFetch = ( url ) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
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
                if (!err.name === 'AbortError') {
                    setError(err.message);
                    setIsLoading(false);
                }
                console.log(err.name)
            })
        return () => abortCont.abort();
    }, [url]);

    return {
        data,
        isLoading,
        error
    }
};

export default useFetch;

