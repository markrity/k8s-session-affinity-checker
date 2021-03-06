module.exports = {
    setJSONBody: setJSONBody,
    logHeaders: logHeaders
  }

  function setJSONBody(requestParams, context, ee, next) {
    return next(); // MUST be called for the scenario to continue
  }

  function logHeaders(requestParams, response, context, ee, next) {
    console.log(response.headers['x-service-version']);
    //console.log(response.body)
    
    return next(); // MUST be called for the scenario to continue
  }
