const $jokeEl = $("#joke");
const $jokeBtn = $("#jokeBtn");

$jokeBtn.on("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await fetch("https://icanhazdadjoke.com", config);

    const data = await res.json();
    $jokeEl.html(data.joke);
  } catch (error) {
    console.error("Error fetching joke:", error);
    $jokeEl.html("Failed to fetch joke. Please try again later.");
  }

  $jokeEl.HTML(data.joke);
}
