import bot from "@bot-whatsapp/bot"
import flowPrincipal from "./flowprincipal"

const isOnlyLetters = (str) => /^[a-zA-Záéíóúüñ]+$/.test(str);

let nombre;
let numero;

const flowTomarDatos = bot.addKeyword("asd2").addAnswer(
    'Buenas, para continuar le pido porfavor que escriba su nombre',
    {capture: true},
    async(ctx,{gotoFlow, endFlow, flowDinamic}) => {
        if(isOnlyLetters(ctx.body.toLowerCase())){
            nombre = ctx.body;
            numero = ctx.from;
            return await gotoFlow(flowPrincipal)
        } else {
            flowDinamic('Escribiste mal tu nombre, que la fuerza te acompañe')
            return endFlow()
        }
    }
)