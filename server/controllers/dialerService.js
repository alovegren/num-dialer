import axios from 'axios';

const DIALER_BASE_URL = 'http://localhost:4830';
const WEBHOOK_URL = 'http://localhost:3000/callStatuses';
const PHONE_NUMBER = '19842068287';
/*
1. hits external API
2. handle webhooks coming in from external API
*/

const service = {
  dial: (req, res) => {
    console.log('dialing!');
    console.log(`hitting API: ${DIALER_BASE_URL}/call`);

    axios.post(`${DIALER_BASE_URL}/call`, {
      phone: PHONE_NUMBER,
      webhookURL: WEBHOOK_URL,
    }).then(response => {
      console.log(response);
      res.status(200).send();
    });
  },

  updateCallStatus: ({ body }) => {
    console.log(body);
  }
}

export default service;
