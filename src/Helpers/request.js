const request = {
    createPlayer: async (playerName) => {
      try {
        const response = await fetch('http://localhost:8080/api/players', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: playerName }),
        });
  
        if (response.ok) {
          console.log('Player created successfully.');
        } else {
          const errorData = await response.json();
          console.error('Error creating player:', errorData);
        }
      } catch (err) {
        console.error('Error creating player:', err);
      }
    },


  getUser: (userEmail) => {
    fetch(`/api/users?email=${userEmail}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    
    .catch((error) => {
      console.error("Error fetching user", error);
    })
  }

};
  
export default request;
  