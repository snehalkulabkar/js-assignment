async function fetchJ(){
    const Response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await Response.json();

    console.log(data);
}
fetchJ(); 
