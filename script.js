async function getJoke() {
  const setup = document.getElementById('setup');
  const punchline = document.getElementById('punchline');
  const jokeBox = document.getElementById('joke-box');

  const emojis = ['😂', '🤣', '😜', '😹', '🤪', '🙈', '😆', '😛', '😇', '🤭'];

  jokeBox.classList.remove('show');
  setup.textContent = 'Loading joke...';
  punchline.textContent = '';

  try {
    const res = await fetch('https://v2.jokeapi.dev/joke/Any?type=single&blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
    const data = await res.json();

    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    setTimeout(() => {
      setup.textContent = '';
      punchline.textContent = `${data.joke} ${emoji}`;
      jokeBox.classList.add('show');
    }, 400);
  } catch (error) {
    setup.textContent = 'Oops! Could not fetch a joke.';
    punchline.textContent = '';
    jokeBox.classList.add('show');
  }
}
