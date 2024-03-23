import bot from "@bot-whatsapp/bot";
import flow_sobre_mi from "./flow-sobre-mi.js";
import flowTomarDatos from "./flowTomarDatos.js";
import { url } from "@ffmpeg-installer/ffmpeg";

const flowPrincipal = bot.addKeyword('asd').addAnswer(
    [
        'Hola estas comunicandote con el esclavo personal de tobi',
        'Digo digo, el bot personal de tobi. En que puedo ayudarte?',
        'Para pedir mas información sobre mi mande "sobre mi"',
        'Para salir mande "off"',
    ],
    {capture:true, delay : 1000, media : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40wotakugomexico%2Fc%25C3%25B3mo-muri%25C3%25B3-satoru-gojo-en-jujutsu-kaisen-explicando-el-plan-de-sukuna-ce6d36f2b435&psig=AOvVaw03d9BKhxg5uNmxwB-UxBsK&ust=1711226865828000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIi6gP_eiIUDFQAAAAAdAAAAABAE"}, 
    async (ctx,{flowDynamic, gotoFlow, endFlow}) => {
        if(ctx.body.toLowerCase() == "sobre mi"){
            await gotoFlow(flow_sobre_mi)
        } else if (ctx.body.toLowerCase() == 'off'){
            return endFlow({body:'Que la fuerza te acompañe'})
        } else {
            return flowDynamic('No tengo ese comando definido')
        }
    }
)
export default flowPrincipal