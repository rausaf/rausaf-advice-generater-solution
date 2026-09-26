const form = document.querySelector('#adviceForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const res = await axios.get(`https://api.adviceslip.com/advice`);
    makeText(res.data)
    form.elements.query.value = '';
})

const makeText = (advice) => {
    const p = document.createElement('P');
    p.innerText = advice.slip.advice;
    document.querySelector(".card-content").append(p);
}