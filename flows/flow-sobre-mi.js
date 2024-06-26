import bot from "@bot-whatsapp/bot"
import flowPrincipal from "./flowprincipal.js";

const flow_sobre_mi = bot.addKeyword("bot").addAnswer(
    [
        'texto sobre mi ejemplo',
        'Para volver al menu principal escribi "back"',
        'Para dejar de hablar escribi "off"'
    ],
    {capture: true},
    async(ctx, {gotoFlow, endFlow}) => {
        if(ctx.body.toLowerCase() == 'back'){
            return await gotoFlow(flowPrincipal)
        } else if (ctx.body.toLowerCase() == 'off'){
            return endFlow({body:'Que la fuerza te acompañe'})
        }
    }
)
export default flow_sobre_mi