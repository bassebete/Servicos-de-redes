const axios = require('axios');

    const api = axios.create({
    baseURL: 'https://graph.instagram.com/me/media?fields=permalink,media_url,username,caption&access_token=IGQVJXNmNWN3VkWk40dGpCLVZAIZAjZAGWXM2MllMSXZA0WWNobjVXZA005SVdEUTdMMG96QUZANeWZABRHlfTjMyWUdVVVgyVXRpODRHcGpNTm9nMExjdmFYTDNMM2hmM1Yyb1Y0N1JSSHQzcklEOG5NQnAyZAQZDZD'
});

module.exports = api;
