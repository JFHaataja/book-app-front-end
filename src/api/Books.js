import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
};

const create = (newBook) => {
    return axios.post(baseUrl, newBook);
};

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
};

const update = (object) => {
    return axios.put(`${baseUrl}/${object.id}`, object);
};

export default { getAll, create, remove, update };
