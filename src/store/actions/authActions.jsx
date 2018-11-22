export const signIn = (credentials) => {
    return (dispatch, getState) => {
        dispatch({ type: 'LOAD', load: true });
        fetch('/data/data.json', {
            // method: 'get',
            // headers: {
            //     "Content-Type": "application/json",
            // },
            // body: JSON.stringify({
            //     username: credentials.username,
            //     password: credentials.password
            // })
        })
        .then(res => res.json())
        .then(resp => {
            const { success, message, data, auth } = resp;
            if (success) {
                !auth ? dispatch({ type: 'LOGIN_SUCCESS', success, message, auth, data: JSON.stringify(data) }) : console.log('auth true, go homepage');
            } else {
                dispatch({ type: 'LOGIN_ERROR', message });
            }
        }).catch(err => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
        // dispatch({ type: 'LOGIN_SUCCESS', success: true, message: '', data: JSON.stringify({}), auth: false });
    }
}

export const chooseBrand = (val) => {
    return (dispatch, getState) => {
        console.log(val)
        dispatch({ type: 'LOAD', load: true });
        fetch('/data/data.json', {
            method: 'get',
            // headers: {
            //     "Content-Type": "application/json",
            // },
            // body: JSON.stringify(val)
        })
        .then(res => res.json())
        .then(resp => {
            const { data, auth } = resp;
            if (!auth) {
                dispatch({ type: 'CHG_BRAND', isOutlet: true, data: JSON.stringify(data) });
            } else {
                alert('auth true, go homepage')
            }
        }).catch(err => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
    }
}

export const chooseOutlet = (val) => {
    return (dispatch, getState) => {
        console.log(val)
        dispatch({ type: 'LOAD', load: true });
        fetch('/data/data.json', {
            // method: 'get',
            // headers: {
            //     "Content-Type": "application/json",
            // },
            // body: JSON.stringify({
            //     outlet: val,
            // })
        })
        .then(res => res.json())
        .then(resp => {
            alert('auth true, go homepage')
        }).catch(err => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
    }
}
