// Etsy Listing Booster AI - Main App Logic

const API_KEY = "YOUR_API_KEY"; // Add your Gemini API key here
let freeUses = 0;

async function generate() {
  const input = document.getElementById("input").value;

  document.getElementById("result").innerText =
    "AI is optimizing your Etsy listing...";

  freeUses++;

  if (freeUses > 2) {
    document.getElementById("result").innerText =
      "Free limit reached. Unlock unlimited optimizations.";
    document.getElementById("paywall").classList.remove("hidden");
    return;
  }

  const prompt = `
You are an Etsy SEO expert and conversion copywriter.

Rewrite the following Etsy listing for maximum visibility and sales.

Return exactly in this format:

🧠 OPTIMIZED TITLE:
...

🏷️ ETSY TAGS (13):
...

📝 DESCRIPTION:
...

🔥 HOOKS (5):
...

INPUT:
${input}
`;

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      })
    }
  );

  const data = await response.json();

  const output =
    data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    "No response. Check API key.";

  document.getElementById("result").innerText = output;

  document.getElementById("paywall").classList.remove("hidden");
}

function upgrade() {
  window.open("https://your-gumroad-link.com", "_blank");
}

// Event listener for generate button
document.getElementById("generate-btn")?.addEventListener("click", generate);

// Event listener for upgrade button
document.getElementById("upgrade-btn")?.addEventListener("click", upgrade);
