export const setAuthToken = (user) => {

    const currentUser = {
        email: user.email
    }


    // ---> get jwt token
    fetch(`https://pets-health-care-server-mdhamimulhaque.vercel.app/jwt`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            // ---> token save local storage
            localStorage.setItem('petHealthCare', data.token)
        })
}