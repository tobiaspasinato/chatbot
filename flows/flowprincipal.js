import bot from "@bot-whatsapp/bot";
import flow_sobre_mi from "/Users/midlesus/Desktop/prog/0800WEB/chatbot/flows/flow-sobre-mi.js";
import flowTomarDatos from "/Users/midlesus/Desktop/prog/0800WEB/chatbot/flows/flowTomarDatos.js";

const flowPrincipal = bot.addKeyword('asd').addAnswer(
    [
        'Hola estas comunicandote con el esclado personal de tobi',
        'Digo digo, el bot personal de tobi. En que puedo ayudarte?',
        'Para pedir mas información sobre mi mande "sobre mi"',
        'Para tomar sus datos escriba "datos"',
        'Para salir mande "off"',
    ],
    {capture:true, delay : 2000}, 
    async (ctx,{flowDynamic, gotoFlow, endFlow}) => {
        if(ctx.body.toLowerCase() == "sobre mi"){
            //await gotoFlow(...)
            // return flowDynamic('Dijiste "sobre mi"')
            await gotoFlow(flow_sobre_mi)
        } else if(ctx.body.toLowerCase() == "datos"){
            await gotoFlow(flowTomarDatos)
        } else if (ctx.body.toLowerCase() == 'off'){
            return endFlow({body:'Que la fuerza te acompañe'})
        } else {
            return flowDynamic('No tengo ese comando definido')
        }
        //if(ctx.body.toLowerCase() == "cancel"){
        //
        //}
    }
)
export default flowPrincipal