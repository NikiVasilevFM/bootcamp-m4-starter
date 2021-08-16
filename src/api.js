export async function loadList(query) {
    const response = await fetch(
        `http://www.omdbapi.com/?s=${query}&apikey=63a45a82`
      );
     
      const body = await response.json();
      console.log(body);
      return body.Search;
   
}
