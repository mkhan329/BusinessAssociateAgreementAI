export const getAIMessage = async (userQuery) => {
  try {
    const response = await fetch('http://127.0.0.1:5000/get-ai-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userQuery }),
      mode: 'cors' // <- Add this
    });
    

    const data = await response.json();

    return {
      role: data.role,
      content: data.content
    };
  } catch (error) {
    console.error('Error fetching AI message:', error);
    return {
      role: "assistant",
      content: "Error connecting to backend"
    };
  }
};