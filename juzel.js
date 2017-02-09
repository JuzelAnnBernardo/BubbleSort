let submit = document.getElementById('submit'),
    sortInput = document.getElementById('sortInput'),
    answer = document.getElementById('answer');

function bubbleSort(array) {
    let length = array.length;

    do {
        for (let i = 0; i < length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                renderResult(array);
            }
        }
    } while (length--)
}

function renderResult(element) {
    let div = document.createElement('div');
    let elem = document.createElement('span');
    elem.innerText = element.join('');
    div.appendChild(elem);
    answer.appendChild(div);
}
submit.onclick = e => {

    bubbleSort(sortInput.value.split(''));
};