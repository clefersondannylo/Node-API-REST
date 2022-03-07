const users = require('../mocks/users');

module.exports = {
    listUsers(request, response){
        const { order } = request.query;
       
        const sortedUsers = users.sort((a, b) => {
            if(order === 'desc'){
                return a.id < b.id ? 1 : -1;
            }
            return a.id > b.id ? 1 : -1;
        })
        
        response.writeHead(200, { 'Content-type': 'application/json'});
        response.end(JSON.stringify(sortedUsers));
    },
    getUserById(request, response){
    const { id } = request.params;
    const user = users.find(user => Number(id) === user.id );
    if(!user){
        response.writeHead(200, {'Content-type': 'text/html'});
        response.end(JSON.stringify({error: 'User not found.'}))
    }
    response.writeHead(200, { 'Content-type': 'application/json'});
    response.end(JSON.stringify(user))
    }
}