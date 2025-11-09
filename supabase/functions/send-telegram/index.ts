// Telegram bot handler for order submissions

const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface OrderRequest {
  name: string;
  phone: string;
  problem: string;
  address?: string;
  urgent: boolean;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, problem, address, urgent }: OrderRequest = await req.json();

    if (!name || !phone || !problem) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Missing Telegram credentials');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const urgentTag = urgent ? '🚨 СРОЧНО' : '📋';
    const addressLine = address ? `\n📍 Адрес: ${address}` : '';
    
    const message = `${urgentTag} Новая заявка!\n\n` +
      `👤 Имя: ${name}\n` +
      `📞 Телефон: ${phone}\n` +
      `🔧 Проблема: ${problem}${addressLine}\n` +
      `⏰ Срочность: ${urgent ? 'ДА (доплата 30%)' : 'Обычная'}\n\n` +
      `📅 Время заявки: ${new Date().toLocaleString('ru-RU')}`;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      }
    );

    if (!telegramResponse.ok) {
      const error = await telegramResponse.text();
      console.error('Telegram API error:', error);
      throw new Error('Failed to send message to Telegram');
    }

    console.log('Order sent successfully to Telegram');

    return new Response(
      JSON.stringify({ success: true, message: 'Order sent successfully' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in send-telegram function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
