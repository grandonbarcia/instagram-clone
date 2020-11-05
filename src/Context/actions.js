const ROOT_URL = 'http://localhost:5000/';


export const signupUser = async (dispatch, signupPayload) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupPayload),
    }
    try {
        let response = await fetch(ROOT_URL + 'signup', requestOptions);
        let data = await response.json();
        if (data) {
            //Save data to signup context 
            console.log(data);
            return data
        }
        //Show Error message if signup failed 
    } catch (error) {
        console.log(error);
    }
}

export const loginUser = async (dispatch, user) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    try {
        dispatch({ type: 'REQUEST_LOGIN' });
        let response = await fetch(ROOT_URL + 'login', requestOptions);
        let data = await response.json();
        console.log(data);
        if (data.isAuthenticated) {
            console.log(data)
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });
            localStorage.setItem('user', JSON.stringify(data.username));
            localStorage.setItem('id', JSON.stringify(data._id));
            return data;
        } else {
            console.log(data);
            dispatch({ type: 'LOGIN_ERROR', error: data });
            return;
        }
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error });
        console.log(error);
    }
}

export const logout = (dispatch) => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
    localStorage.removeItem('id');
}