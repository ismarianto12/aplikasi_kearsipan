export const getItem = (nama) => {
    return localStorage.getItem(nama) === null
        ? []
        : localStorage.getItem(nama);
};


export const setItem = (nama) => {
    return localStorage.setItem('token', nama)
}
 