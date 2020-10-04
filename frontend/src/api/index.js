import Fetchjson from '../lib/Fetch';

const API = {
    getTodos: () => Fetchjson.get('/todo'),
    addTodo: (data) => Fetchjson.post('/todo', data),
    getTodoById: (id) => Fetchjson.get(`/todo/${id}`),
    deleteTodo: (id) => Fetchjson.delete(`/todo/${id}`),
    updateTodo: (id, data) => Fetchjson.update(`/todo/${id}`, data)
}

export default API;