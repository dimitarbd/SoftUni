import { useState } from 'react';

function useForm(initialValues, submitHandler) {
    const [values, setValues] = useState(initialValues);

    function changeHandler(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        submitCallback(values);
    }

    return {
        values,
        changeHandler,
    };
}   