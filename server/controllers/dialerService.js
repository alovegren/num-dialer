import axios from 'axios';

const DIALER_BASE_URL = 'http://localhost:4830';
/*
1. hits external API
2. handle webhooks coming in from external API
*/

const service = {
  dial: (phone, webhook) => {
    console.log('dialing!');
    // axios.post(`${DIALER_BASE_URL}/call`, { phone, webhook });
  },
}

export default service;