class CallData {
  #calls;

  constructor() {
    this.#calls = {};
  }

  addCall(id, number) {
    this.#calls[id] = { number };
  }

  updateStatus(id, status) {
    this.#calls[id].status = status;
  }

  getAll() {
    return this.#calls;
  }
}
/*
current structure of 
{
  2345: {
    number: "13018040009",
    status: "answered",
  }
}
*/

const callData = new CallData();
export default callData;