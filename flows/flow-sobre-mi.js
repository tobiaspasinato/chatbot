import bot from "@bot-whatsapp/bot"
import flowPrincipal from "/Users/midlesus/Desktop/prog/0800WEB/chatbot/flows/flowprincipal.js";

const flow_sobre_mi = bot.addKeyword("sobre mi").addAnswer(
    [
        'texto sobre mi que me dio paja hacer',
        'Para volver al menu principal escribi "back"',
        'Para dejar de hablar escribi "off"'
    ],
    async(ctx,[gotoFlow, endFlow]) => {
        if(ctx.body.toLowerCase() == 'back'){
            return await gotoFlow(flowPrincipal)
        } else if (ctx.body.toLowerCase() == 'off'){
            return endFlow({body:'Que la fuerza te acompañe'})
        }
    }
)
export default flow_sobre_mi