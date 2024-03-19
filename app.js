//import "dotenv/config";
import bot from "@bot-whatsapp/bot";
import QRPortalWeb from "@bot-whatsapp/portal";
import BaileysProvider from "@bot-whatsapp/provider/baileys";
import MockAdapter from "@bot-whatsapp/database/mock";
import flowPrincipal from "./flows/flowprincipal.js";

const GLOBAL_STATE = [];
//export default function delay(ms) {
//    return new Promise(resolve => setTimeout(resolve, ms));
//}
const main = async () => {
const adapterDB = new MockAdapter();
const adapterFlow = bot.createFlow([
    //flowname + ,
    flowPrincipal,
]);
const adapterProvider = bot.createProvider(BaileysProvider);

bot.createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
});
QRPortalWeb();
};

main();
