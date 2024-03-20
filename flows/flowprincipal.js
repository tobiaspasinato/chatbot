import bot from "@bot-whatsapp/bot";

const flowPrincipal = bot.addKeyword('asd').addAnswer(
    [
        'Hola estas comunicandote con el esclado personal de tobi',
        'Digo digo, el bot personal de tobi. En que puedo ayudarte?',
        'Para pedir mas información sobre mi mande "sobre mi"',
        'Para saber como ser feliz mande "ser feliz"',
        'Que es lo que compartimos todos los dias? (escribir solo la palabra)',
        'Para salir mande "cancel',
    ],
    {capture:true, delay : 2000}, 
    async (ctx,{flowDynamic}) => {
        if(ctx.body.toLowerCase() == "sobre mi"){
            //await gotoFlow(...)
            return flowDynamic('Dijiste "sobre mi"')
        }
        if(ctx.body.toLowerCase() == "relicario"){
            return flowDynamic('Te amo mi amor 💖')
        }
        //if(ctx.body.toLowerCase() == "cancel"){
        //
        //}
    }
)
export default flowPrincipal