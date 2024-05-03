import httpInstance from '../httpInstance';

export const getDetails = async (id: string | undefined) => {
    let res: any;
    const endpoint = `${id}?api_key=${process.env.REACT_APP_MDB_API_KEY}`;
    await httpInstance.get(endpoint)
        .then((data) => {
            res = data;
            console.log(res);
        }).catch((err) => {
            res = err.response;
        });
    return res;
};
