import {domainPath} from "./Config";

const PostAPI = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}`, {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((result: Response) => {
                resolve(result);
            },(err) => {
                reject(err);
            })
    })
    return promise;
} 

export default PostAPI;