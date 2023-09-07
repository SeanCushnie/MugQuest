const request = {
  createPlayer: async (playerName) => {
    try {
      const response = await fetch("http://localhost:8080/api/players", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: playerName }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        const errorData = await response.json();
        console.error("Error creating player:", errorData);
      }
    } catch (err) {
      console.error("Error creating player:", err);
    }
  },

  getUser: (userEmail) => {
    return fetch(`http://localhost:8080/api/users?email=${userEmail}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching user");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error("Error fetching user", error);
      });
  },

  getPlayer: (playerName) => {
    fetch("http://localhost:8080/api/players?name=${id}")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  },
};

export default request;
