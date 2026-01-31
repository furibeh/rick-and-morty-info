export async function getCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character");

  if (!res.ok) {
    throw new Error("Error fetching the characters");
  }

  return res.json();
}

export async function getCharacterById(id: number) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  if (!res.ok) {
    throw new Error("Error fetching the character");
  }

  await new Promise(resolve => setTimeout(resolve, 2000));

  return res.json();
}

export async function getCharacterDescription(name: string) {
  const res = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "model": "gemma3:1b",
      "prompt": `Give a description of the character ${name} of the Rick and Morty's series. Don't give me any greetings or extra information, just the description of the character.`,
      "stream": false
    })
  });

  if (!res.ok) {
    throw new Error("Error fetching the character");
  }

  return res.json();
}