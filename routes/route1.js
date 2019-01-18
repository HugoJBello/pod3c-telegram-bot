module.exports = (server) => {
    server.get('/', (req, res, next) => {
      res.send({message:'Hello from start'});
      return next();
    });
};