import dialerService from '../services/dialerService.js';
import callData from '../data/db.js';

const callsController = {
  initCalls: async (request, response) => {
    const { id: callId } = await dialerService.dial('19362072765'); // hardcoded
    callData.addCall(callId, '19362072765');
    response.status(200).send('Call initiated');
  },

  updateCallStatus: (request, response) => {
    const { id, status } = request.body;
    callData.updateStatus(id, status);
    response.status(200).send('Call status updated');    
  }
};

export default callsController;
