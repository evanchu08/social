import axios from 'axios';

export const registerUser = (userData, history) => dispatch => {
    axios.post('/api/user/signup', userData)
        .then(response => history.push('/login'))
        .catch(err => 
            console.log(err))
}

export const loginUser = userData => dispatch => {
    axios.post('/api/user/login', userData)
        .then(response => {
            console.log(response)
        }).catch(err => 
            console.log(err)
        )
}