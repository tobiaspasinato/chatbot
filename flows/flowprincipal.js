import bot from "@bot-whatsapp/bot";

const flowPrincipal = bot.addKeyword('asd').addAnswer(
    [
        'Hola estas comunicandote con el esclado personal de tobi',
        'Digo digo, el bot personal de tobi. En que puedo ayudarte?',
        'Para pedir mas información sobre mi mande "sobre mi"',
        'Para saber como ser feliz mande "ser feliz"',
        'Para salir mande "cancel',
    ],
    {capture:true, delay : 2000}, 
    async (ctx,{flowDynamic}) => {
        if(ctx.body.toLowerCase() == "sobre mi"){
            //await gotoFlow(...)
            return flowDynamic('Dijiste "sobre mi"')
        } else {
            return flowDynamic('Escribiste mal papa')
        }
        //if(ctx.body.toLowerCase() == "cancel"){
        //
        //}
    }
)
export default flowPrincipal