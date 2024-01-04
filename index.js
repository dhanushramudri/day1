// Function to perform login and return the token
async function performLogin(username, password) {
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.token; // Return the token
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.error("Error during login:", error.message);
    return null;
  }
}

// Usage example
async function loginAndUseToken() {
  const username = "kminchelle";
  const password = "0lelplR";

  const token = await performLogin(username, password);

  if (token) {
    console.log("Login successful! Token:", token);

    // You can use this token for subsequent authenticated requests
    // For example:
    // const userData = await fetchUserData(token);
    // console.log('User Data:', userData);
  } else {
    console.log("Login failed. Token not obtained.");
  }
}

// Call the function to perform login and use the token
loginAndUseToken();
