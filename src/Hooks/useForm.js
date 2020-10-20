import { useState, useEffect } from 'react';

const useForm = (form) => {

    let [values, setValues] = useState({
        email: '',
        fName: '',
        lName: '',
        username: '',
        password: '',


    });

    let [login, setLogin] = useState({
        username: '',
        password: '',
    });


    let [filled, isFormFilled] = useState(true)


    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        switch (form) {
            case 'signup':
                setValues({
                    ...values,
                    [name]: value,
                });
                isFormFilled(checkFormInput(value))

            case 'login':
                setLogin({
                    ...login,
                    [name]: value,
                });
                isFormFilled(checkFormInput(login))

        }



    }

    const clearForm = () => {
        setValues({});
        setLogin({});
    }

    const checkFormInput = (form) => {
        let count = 0;
        let arr = Object.entries(form);
        for (let [key, value] of arr) {
            if (value.length > 4) {
                count++;
            }
        }
        if (count == arr.length) {
            return false
        }

        return true

    }

    return { handleChange, clearForm, values, login, filled };
}

export default useForm; 
