function transformBox(element) {
    const boxB1 = document.querySelector('.box-b-1');
    const boxB2 = document.querySelector('.box-b-2');
    const boxB3 = document.querySelector('.box-b-3');


    if (element.classList.contains('box-b-1')) {
        const boxB1Content = boxB1.innerHTML;
        boxB1.innerHTML = boxB2.innerHTML;
        boxB2.innerHTML = boxB1Content;

    }

    if (element.classList.contains('box-b-3')) {
        const boxB3Content = boxB3.innerHTML;
        boxB3.innerHTML = boxB2.innerHTML;
        boxB2.innerHTML = boxB3Content;
    }

}
