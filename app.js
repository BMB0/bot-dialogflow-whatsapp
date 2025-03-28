const { createProvider } = require("@bot-whatsapp/bot");
const MockAdapter = require("./src/emptyDatabaseAdapter.cjs");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const { createBotDialog } = require("./src/dialogflowCXModified");
const adapterDB = new MockAdapter();
const main = async () => {
  const location = "us-central1";
  const agentId = "35af069b-c932-4782-a13a-1213986dae07";
  let optionsDX = {
    location: location,
    agentId: agentId,
    businessNumber: "59167465545",
  };
  const adapterProvider = createProvider(BaileysProvider);
  createBotDialog(
    {
      provider: adapterProvider,
      database: adapterDB,
    },
    optionsDX
  );
};

main();