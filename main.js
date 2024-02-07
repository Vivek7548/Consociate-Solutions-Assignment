document.getElementById('githubForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const username = document.getElementById('usernameInput').value;
    const userData = await fetch(`https://api.github.com/users/${username}`);
    const userDataJson = await userData.json();
    
    if (userDataJson.message === "Not Found") {
      alert("User not found!");
      return;
    }
    
    document.getElementById('userCard').classList.remove('hidden');
    document.getElementById('avatar').src = userDataJson.avatar_url;
    document.getElementById('username').innerText = userDataJson.login;
    document.getElementById('name').innerText = `Name: ${userDataJson.name || "N/A"}`;
    document.getElementById('publicRepos').innerText = `Public Repos: ${userDataJson.public_repos}`;
    document.getElementById('publicGists').innerText = `Public Gists: ${userDataJson.public_gists}`;
    document.getElementById('createdAt').innerText = `Profile Created At: ${new Date(userDataJson.created_at).toISOString().split('T')[0]}`;
  });
  