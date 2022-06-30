import axios from 'axios';

const DIALER_BASE_URL = 'http://localhost:4830';
const WEBHOOK_URL = 'http://localhost:3000/api/callStatuses';
const PHONE_NUMBER = '13018040009';
/*
1. hits external API
2. handle webhooks coming in from external API
*/

const service = {
  dial: () => {
    console.log('dialing!');
    axios.post(`${DIALER_BASE_URL}/call`, { phone: PHONE_NUMBER, webhookURL: WEBHOOK_URL });
  },

  updateCallStatus: ({ body }) => {
    console.log(body);
  }
}

export default service;