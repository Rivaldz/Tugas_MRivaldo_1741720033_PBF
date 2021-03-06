import {domainPath} from "./Config";

// const domainPath = 'http://localhost:3001';
const GetApi = (path) =>{
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}`)
            .then(response => response.json())
            .then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}
export default GetApi;