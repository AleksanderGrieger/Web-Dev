function show(img_class) {
    document.querySelectorAll('.img-thumb').forEach(element => { element.classList.contains(img_class.id) ? element.style.display = 'block' : element.style.display = 'none'; });
}

// document.querySelectorAll('.img-thumb').forEach(element => {
//     element.style.display = 'none';
// });
// document.querySelectorAll(`.${img_class.id}`).forEach(element => {
//     element.style.display = 'block';
// });

//////

// document.querySelectorAll('.img-thumb').forEach(element => {
    //     if(element.classList.contains(img_class.id))  {
    //         element.style.display = 'block';
    //     } else {
    //         element.style.display = 'none';
    //     }
    // });

function showAll(){
    document.querySelectorAll('.img-thumb').forEach(element => { element.style.display = 'block'; });
}