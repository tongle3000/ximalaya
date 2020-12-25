import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';



const useURLLoader = (url) => {
    // https://api.thecatapi.com/v1/images/search?category_ids=1
    const [data, setData] = useState([{
        breeds:[],
        categories:[{
            id: '',
            name: '',
        }],
        id: '',
        url: ''
    }]);
    const [loading, setLoading] = useState(false);
    // const [num, setNum] =useState(1)

    useEffect(() => {

        setLoading(true);

        axios.get(url).then(data => {
            console.log(data, 'bbbb');

            setData(data);
            setLoading(false);
        }).catch(
            error => console.log(error)
        );

    },[url]);

    return [data, loading];
}

export default useURLLoader;
 