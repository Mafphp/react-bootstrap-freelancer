const PORT = 3002 || process.env.PORT;
const server = require('./config/server');
server.listen(PORT, ()=>console.log(`Server running on http://localhost:${PORT}/`));