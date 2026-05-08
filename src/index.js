require('dotenv').config();

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(🚀 Smart Money Bot запущений  Команди: /status /scan);
});

bot.command('status', (ctx) => {
  ctx.reply('✅ Бот працює стабільно');
});

bot.command('scan', async (ctx) => {

  ctx.reply('🔎 Сканую ринок...');

  const signal = 🔥 SIGNAL  Монета: BTCUSDT Тип: LONG  📍 Entry: 62000 🛑 SL: 61500 🎯 TP: 63500  ⚡ Сила: 7/10;

  ctx.reply(signal);

});

bot.launch()
  .then(() => {
    console.log('✅ Bot launched');
  });

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
