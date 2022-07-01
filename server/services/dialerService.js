import axios from 'axios';

const DIALER_BASE_URL = 'http://localhost:4830';
const WEBHOOK_URL = 'http://localhost:3000/callStatuses';
/*
1. hits external API
2. handle webhooks coming in from external API
*/

const service = {
  dial: (phoneNumber) => {
    console.log('dialing!');
    console.log(`hitting API: ${DIALER_BASE_URL}/call`);

    axios.post(`${DIALER_BASE_URL}/call`, {
      phone: phoneNumber,
      webhookURL: WEBHOOK_URL,
    }).then(response => {
      // console.log(response); // this is no longer middleware
      // res.status(200).send();
    });
  },
};

export default service;
