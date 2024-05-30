import { useEffect, useState } from "react";


const useBooksData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch('/public/data.json');
            const data = await res.json();
            setData(data);
        }
        fetchData();
    }, [])
    return { data, loading };
       
};

export default useBooksData;