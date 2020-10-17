const formEl = document.form1.input1
const Btn = document.querySelector('.btn-primary');
const errMsg = document.querySelector('.error-msg');
const mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/

Btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formEl.value)){
        errMsg.textContent = 'validated successfully !'
        errMsg.style.color = 'black';
        return true
    }else if (formEl.value === ''){
        errMsg.textContent = 'field cannnot be blank !'
        errMsg.style.color = 'red'
        formEl.focus();
        return false
    }else {
        errMsg.textContent = 'Please enter a valid email address!';
        errMsg.style.color = 'red';
        formEl.focus();
        return false
    }
    
})