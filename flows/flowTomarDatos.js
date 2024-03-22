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

let nombre;
let numero;

const flowTomarDatos = bot.addKeyword("asd2").addAnswer(
    'Buenas, para continuar le pido porfavor que escriba su nombre',
    {capture: true},
    async(ctx,{gotoFlow, endFlow, flowDinamic}) => {
        if(validateInput(ctx.body.toLowerCase())){
            nombre = ctx.body;
            console.log(nombre)
            numero = ctx.from;
            console.log(numero)
            return await gotoFlow(flowPrincipal)
        } else {
            flowDinamic('Escribiste mal tu nombre, que la fuerza te acompañe')
            return endFlow()
        }
    }
)
export default flowTomarDatos