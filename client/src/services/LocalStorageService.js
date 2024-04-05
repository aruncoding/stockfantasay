const storeToken = (value) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);

    // Format the token as a cookie string
    const cookieString = `token=${value}; expires=${expirationDate.toUTCString()}; path=/; Secure; HttpOnly`;
    console.log(cookieString,'cookieStringcookieStringcookieString')
    // Set the cookie
    document.cookie = cookieString;
    console.log('cookieString',cookieString);

    return cookieString;
}

const getToken = () => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'token') {
            return value;
        }
    }
    return null;
}

const removeToken = (value) => {
    const cookieString = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Secure; HttpOnly';
    document.cookie = cookieString;
    return cookieString;
}

export { storeToken, getToken, removeToken }