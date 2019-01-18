const sendMessages = require("../utils/messaging");
const routes= (server) => {
    server.post('/start_bot', async (req, res, next) => {
    const body = req.params;
    const reply = "hi there";
    await sendMessages(body, reply);
    return next();
  });
};

module.exports = routes;
