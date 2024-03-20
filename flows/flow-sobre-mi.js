import bot from "@bot-whatsapp/bot"
import flowPrincipal from "./flowprincipal"

const flow_sobre_mi = bot.addKeyword("sobre mi").addAnswer(
    [
        'texto sobre mi que me dio paja hacer',
    ],
    async(ctx,[gotoFlow, endFlow]) => {
        if(ctx.body.toLowerCase() == "back"){
            await gotoFlow(flowPrincipal)
        } else if (ctx.body.toLowerCase() == 'off'){
            return endFlow({body:'Que la fuerza te acompañe'})
        }
    }
)
export default flow_sobre_mi