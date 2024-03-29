const ROOT_URL = 'https://fast-mesa-18398.herokuapp.com/';


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
        // let response = await fetch(ROOT_URL + 'login', requestOptions);
        // let data = await response.json();

        const username = user.username === 'username' ? true : false
        const password = user.password === 'password' ? true : false


        if (username && password) {
            dispatch({ type: 'LOGIN_SUCCESS', payload: user });
            localStorage.setItem('user', JSON.stringify(user.username))
            localStorage.setItem('id', JSON.stringify(12345678))
            localStorage.setItem('jwt', JSON.stringify(12345678));
            return true;

        }


        // if (data.isAuthenticated) {
        //     console.log(data)
        //     dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        //     localStorage.setItem('user', JSON.stringify(data.username));
        //     localStorage.setItem('id', JSON.stringify(data._id));
        //     localStorage.setItem('jwt', JSON.stringify(data.jwt));
        //     return data;
        // } else {
        //     console.log(data);
        //     dispatch({ type: 'LOGIN_ERROR', error: data });
        //     return;
        // }



    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error });
        console.log(error);
    }
}

export const authUser = async (jwt) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jwt)
    };

    try {
        let response = await fetch(ROOT_URL + 'feed', requestOptions);
        let data = await response.json();
        console.log(data);
    } catch {

    }
}

export const logout = (dispatch) => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
    localStorage.removeItem('id');
}