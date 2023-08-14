const counter = document.getElementById('counter')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const like = document.getElementById('heart')
const submit = document.getElementById('submit')
const field = document.getElementById('comment-input')

let counterId = 
 setInterval( () =>
           counter.textContent++
        , 1000)



const pause = document.getElementById('pause')

    pause.addEventListener('click', () => {   
  if (pause.textContent.includes('resume')){
    counterId = setInterval( () => counter.innerHTML++, 1000)
    pause.textContent = 'pause'
    plus.disabled = false
    minus.disabled = false
    like.disabled = false
    submit.disabled = false
} else{
    clearInterval(counterId)
    pause.textContent = 'resume'
    plus.disabled = true// disable the buttons
    minus.disabled = true
    like.disabled = true
    submit.disabled = true
  }
})



plus.addEventListener('click', ()=> {
        counter.textContent++
    })


minus.addEventListener('click', ()=> {
    counter.textContent--
})



like.addEventListener('click', ()=> { 
   const likeList = document.querySelector('.likes')
   let foundLi = document.getElementById(counter.textContent)
if (foundLi) {
        console.log('foundLi',foundLi)
        foundLi.dataset.num_of_likes++
        foundLi.textContent = `${foundLi.id} has been liked ${foundLi.dataset.num_of_likes} times`
        
} else{
   let newLine = document.createElement('li')
   newLine.dataset.num_of_likes = 1
   newLine.id = counter.textContent
    newLine.textContent = `${counter.textContent} has been liked 1 time`
   likeList.appendChild(newLine)
}  
})
const form = document.getElementById('comment-form')

form.addEventListener('submit',(e) =>{
    e.preventDefault()
    const commentArea = document.querySelector('#list')
   const comment = document.createElement('p')
let text = document.getElementById('comment-input').value
comment.textContent = text
commentArea.appendChild(comment)
form.reset()
})





