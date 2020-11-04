import { useState, useEffect } from 'react';

const useForm = (form) => {

    let [signupInput, setSignupInput] = useState({
        email: '',
        fName: '',
        lName: '',
        username: '',
        password: '',


    });

    let [loginInput, setLoginInput] = useState({
        username: '',
        password: '',
    });


    let [isFilled, isFormFilled] = useState(true)


    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        switch (form) {
            case 'signup':
                setSignupInput({
                    ...signupInput,
                    [name]: value,
                });
                isFormFilled(checkFormPopulation(value))

            case 'login':
                setLoginInput({
                    ...loginInput,
                    [name]: value,
                });
                isFormFilled(checkFormPopulation(loginInput))

        }



    }

    const clearForm = () => {
        setSignupInput({});
        setLoginInput({});
    }

    const checkFormPopulation = (form) => {
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

    return { handleChange, clearForm, signupInput, loginInput, isFilled };
}

export default useForm; 
