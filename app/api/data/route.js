export async function GET() {
  return Response.json({
    features: [
      {
        title: "Real-time Monitoring",
        desc: "Track your network performance instantly."
      },
      {
        title: "Advanced Analytics",
        desc: "Get deep insights into network behavior."
      },
      {
        title: "Secure & Reliable",
        desc: "Ensure maximum uptime and data security."
      }
    ]
  });
}