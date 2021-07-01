async function test() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // получить один заголовок
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        let json = await response.text();
        document.write(json);
      } else {
        document.write(json);
      }
  }
test().then(data => console.log(data));