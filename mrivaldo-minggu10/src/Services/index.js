const domainPath = 'http://localhost:3001';
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

const PostAPI = (path, data) => {
    const promise = new Promise((resolve, reject)=>{
        fetch(`${ domainPath }/${path}`,{
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((result: Response) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

const DeleteAPI = (path, data) => {
    const promise = new Promise((resolve, reject ) => {
        fetch(`${domainPath}/${path}/${data}`,{method: 'DELETE'})
            .then((result: Response) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
    })
}

const getNewsBlog = () => GetApi('posts?_sort=id&_order=desc')
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);
const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('post', dataYgDiHapus);
const API = {
    getNewsBlog,
    postNewsBlog,
    dataYgDiHapus
}

export default API;