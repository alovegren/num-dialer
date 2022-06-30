import dialerService from '../services/dialerService.js';

const callsController = {
  initCalls: (request, response) => {
    dialerService.dial('19362072765');
  },

  updateCallStatus: ({ body }) => {
    console.log(body);
  }
};

export default callsController;
