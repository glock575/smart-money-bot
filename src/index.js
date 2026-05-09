require('dotenv').config();

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('🚀 Smart Money Bot запущений  Команди: /status /scan');
});

bot.command('status', (ctx) => {
  ctx.reply('✅ Бот працює стабільно');
});

bot.command('scan', (ctx) => {

  ctx.reply(🔎 Сканую ринок...  🔥 SIGNAL  Монета: BTCUSDT Тип: LONG  📍 Entry: 62000 🛑 SL: 61500 🎯 TP: 63500  ⚡ Сила: 7/10);

});

bot.launch();

console.log('✅ Bot launched');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
