// Etsy Listing Booster AI - Main App Logic

const API_KEY = "YOUR_GEMINI_API_KEY"; // Add your Gemini API key here

async function generate() {
  const input = document.getElementById("input").value;

  document.getElementById("result").innerText =
    "Generating optimized Etsy listing...";

  // 🔮 Replace this section with your Google AI Studio Gemini API call
  const fakeAIOutput = `
🧠 OPTIMIZED TITLE:
Boho Neutral Wall Art Printable | Minimal Cottage Decor | Instant Download

🏷️ ETSY TAGS:
boho wall art, printable decor, neutral home decor, minimalist print, cottage style art...

📝 DESCRIPTION:
Transform your space with this calming neutral boho print...

🔥 HOOK IDEAS:
- "Your walls are missing this vibe…"
- "Minimal decor, maximum aesthetic"
`;

  setTimeout(() => {
    document.getElementById("result").innerText = fakeAIOutput;
    document.getElementById("paywall").classList.remove("hidden");
  }, 900);
}

function upgrade() {
  window.open("https://your-gumroad-link.com", "_blank");
}

// Event listener for generate button
document.getElementById("generate-btn")?.addEventListener("click", generate);

// Event listener for upgrade button
document.getElementById("upgrade-btn")?.addEventListener("click", upgrade);