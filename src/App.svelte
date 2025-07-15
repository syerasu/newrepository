<script>
  let name = "Sriya"; 
  let favoriteNumber = 9; 
  let favoriteCity = "Boston"; // Add a favorite city
  let bio = "I am an incoming Junior at UConn majoring in CogSci and minoring in Comp SciI am a web developer with a passion for building cool things!";
  let interests = "I write articles for UConn's Her Campus blogs in my free time and I love to read (I'm currently reading 'A Picture of Dorian Gray' by Oscar Wilde).";
  let hobbies = ["Coding", "Reading", "Writing", "Trying out new cafes"]; // List some hobbies
    import ImageCard from "./lib/ImageCard.svelte";
  
  let cardData = [
    {
      image:
        "https://media.istockphoto.com/id/185590965/photo/yellow-rubber-duck-for-bath-time.jpg?s=612x612&w=0&k=20&c=QoT-O5jbOugCgdQhLat15c0L9jCmRrSTiO9U50W_eQc=",
      title: "Coding",
      description:
        "I love solving problems and writing code to build cool things.",
    },
    {
      image: "https://media.istockphoto.com/id/1460007178/photo/library-books-on-table-and-background-for-studying-learning-and-research-in-education-school.jpg?s=612x612&w=is&k=20&c=PvjSrEGbw3G64q74ccIQaJ9nEj9AzPwjvRo1cWFA3UU=",
      title: "Reading",
      description: "Books help me grow intellectually and creatively.",
    },
    {
      image: "https://media.istockphoto.com/id/1440399157/photo/international-airport-terminal-asian-beautiful-woman-with-luggage-and-walking-in-airport.jpg?s=612x612&w=0&k=20&c=RqmI0KG_pnEb_GmWLC6pY5MoV75JBt1nU1L9dStkJys=",
      title: "Traveling",
      description:
        "I enjoy exploring new cultures and learning from the world around me.",
    },
  ];
</script>

<style>
  h1 {
    color: #39103c;
    font-family: Arial, sans-serif;
  }
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  .hobbies {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }
  .hobby {
    background-color: #9d6fc5;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
  }
</style>

<div class="container">
  <h1>About Me</h1>
  <p>Hello, my name is <strong>{name}</strong>!</p>
  <p>My favorite number is <strong>{favoriteNumber}</strong>.</p>
  <p>My favorite city is <strong>{favoriteNumber}</strong>.</p>
  <p>{bio}</p>
  <p>{interests}</p> 

  <h2>My Hobbies</h2>
  <div class="hobbies">
    {#each hobbies as hobby}
      <div class="hobby">{hobby}</div>
    {/each}
  </div>

  <h2>Some of My Favorite Things</h2>
  <div class="card-container">
    {#each cardData as { image, title, description }}
      <ImageCard {image} {title} {description} />
    {/each}
  </div>
  </div>
</div>