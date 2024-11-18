const { postPredictHandler, postPredictHistoriesHandler } = require('./handler');
 
const routes = [
  {
    method: 'POST',
    path: '/predict',
    handler: postPredictHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true
      },
    },
  },
  {
    method: 'GET',
    path: '/predict/histories',
    handler: postPredictHistoriesHandler,
  },
];
 
module.exports = routes;