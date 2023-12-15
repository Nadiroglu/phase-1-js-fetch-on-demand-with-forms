const init = () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let input = event.target["searchByID"]   
        // form.reset()
        // console.log(input)
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            let title = document.querySelector('section#movieDetails h4');
            let summary = document.querySelector('section#movieDetails p');
            title.innerHTML = data.title
            summary.innerHTML = data.summary
            form.reset()
        })
         
    })
    
  
}

document.addEventListener('DOMContentLoaded', init);


