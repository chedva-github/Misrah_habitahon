export default function execHandler(state: any, action: any , handlers: any){
    let afterConvert= convertActionNameToLowerCase(action.type)
    let handler= handlers[afterConvert]
   if (handler)
    handler(state, action)
}

function convertActionNameToLowerCase(actionName: string) {
    return actionName.toLowerCase().replace(/_(\w)/g, v => v[1].toUpperCase())
}