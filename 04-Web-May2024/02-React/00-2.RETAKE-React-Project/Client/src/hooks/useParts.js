import { useState, useEffect } from 'react';
import partsAPI from '../api/parts-api';

export function useGetAllParts() {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await partsAPI.getAll();

            setParts(result);
        })();
    }, []);

    return [parts, setParts];
}