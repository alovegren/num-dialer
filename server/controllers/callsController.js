import dialerService from '../services/dialerService.js';

const callsController = {
  initCalls: (request, response) => {
    dialerService.dial('19362072765');
    response.status(200).send('Call initiated');
  },

  updateCallStatus: (request, response) => {
    console.log(request.body); // update fb-not-fb
    response.status(200).send('Call status updated');
  }
};

export default callsController;
