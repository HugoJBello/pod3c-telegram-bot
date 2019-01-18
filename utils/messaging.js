const axios = require('axios');
const url = "https://api.telegram.org/bot" + process.env['TELEGRAM_API_TOKEN'] +"/sendMessage";

const sendMessage = (message, reply) => {
    console.log(message);
    return axios.post(url, {chat_id: message.message.chat.id,
        text: reply}).then(response => {
        console.log("Message posted");
    }).catch(error =>{
        console.log(error);
    });
};

module.exports = sendMessage;