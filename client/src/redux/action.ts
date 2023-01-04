const actions = new Proxy(
    {},
    {
      get: function (target: any, prop: any) {
        if (target[prop] === undefined)
          return function (args: any) {
            return { type: convertActionName(prop), payload: args };
          };
        else return target[prop];
      },
    }
  );
  
  function convertActionName(actionName: string){
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
  }
  
  export default actions