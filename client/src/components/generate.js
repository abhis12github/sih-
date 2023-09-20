// This code is for v4 of the openai package: npmjs.com/package/openai


  
async function generate(transcript) {
  const endpointUrl_Turbo = "https://api.openai.com/v1/chat/completions";
  var apiKey_Turbo ="";//Your Api Key Here;

  return new Promise((resolve, reject) => {
    fetch(
      endpointUrl_Turbo,
      {
        body: JSON.stringify({
          "model": "gpt-3.5-turbo",
          "messages": [
            {
              role: "system",
              content: "You will be provided with statements, and your task is to convert them to standard English",
            },
            {
              role: "user",
              content: transcript, // Pass the user's input here
            },
          ],
          "temperature": 0,
          "max_tokens": 256
        }),
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + apiKey_Turbo,
        },
      }
    ).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          const text = json['choices'][0]['message'].content;
          resolve(text);
        });
      } else {
        reject(new Error("Failed to fetch data"));
      }
    });
  });
}

export default generate;
