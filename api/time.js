export default function handler(req) {
  const now = new Date();
  return new Response(JSON.stringify({
    time: now.toISOString(),
    local: now.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }),
    timestamp: now.getTime()
  }), {
    headers: { 'content-type': 'application/json' }
  });
}

export const config = {
  runtime: 'edge'
};
