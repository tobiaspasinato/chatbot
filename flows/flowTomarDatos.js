import bot from "@bot-whatsapp/bot"
import flowPrincipal from "./flowprincipal.js"

function validateInput(input) {
    // Expresión regular que coincide con cualquier carácter que no sea una letra o un espacio
    const regex = /[^a-zA-Z\s]/g;
    // Si la entrada coincide con la expresión regular, devuelve un error
    if (regex.test(input)) {
        return true;
    }
    // Si la entrada no coincide con la expresión regular, devuelve null
    return null;
}

const flowTomarDatos = bot.addKeyword("bot")
.addAnswer(
    'Buenas, para continuar le pido porfavor que escriba su nombre',
    {capture: true},
    async(ctx,{state}) => {
        if(validateInput(ctx.body.toLowerCase())){
            console.log(ctx.body)
            await state.update({nombre: ctx.body})
        }
    }
).addAnswer(
    'Y su numero de telefono, Cual es?',
    {capture: true},
    async(ctx,{state}) => {
        if(validateInput(ctx.body.toLowerCase())){
            console.log(ctx.body)
            await state.update({numero: ctx.body})
        }
    }
).addAnswer(
    'Gracias por los datos.',
    {capture: true},
    async({gotoFlow}) => {return gotoFlow(flowPrincipal)}
)
export default flowTomarDatos