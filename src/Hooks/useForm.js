import { useState, useEffect } from 'react';

const useForm = (form) => {

    let [values, setValues] = useState({
        email: '',
        fName: '',
        lName: '',
        username: '',
        password: ''

    });

    let [login, setLogin] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        switch (form) {
            case 'signup':
                setValues({
                    ...values,
                    [name]: value
                });
            case 'login':
                setLogin({
                    ...login,
                    [name]: value
                });
        }
    }

    const clearForm = () => {
        setValues({});
        setLogin({});
    }

    return { handleChange, clearForm, values, login };
}

export default useForm; 
