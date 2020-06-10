var cpf = document.querySelector("#cpf");
//ID do campo onde irá digitar o CPF ou CNPJ

var celular = document.querySelector("#celular");
//ID do campo onde irá digitar o celular ou telefone


celular.addEventListener("keyup", () => {
    celular.value = maskPhone(celular.value);
});


cpf.addEventListener("keyup", () => {
    cpf.value = maskCpfCnpj(cpf.value);
});

function maskPhone(value) {
    v = value;
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    return v;
}

function maskCpfCnpj(value) {

    value = value.replace(/\D/g, "")

    if (value.length <= 11) {
        value = value.replace(/(\d{3})(\d)/, "$1.$2")
        value = value.replace(/(\d{3})(\d)/, "$1.$2")
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2")

    } else {
        value = value.replace(/^(\d{2})(\d)/, "$1.$2")
        value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        value = value.replace(/\.(\d{3})(\d)/, ".$1/$2")
        value = value.replace(/(\d{4})(\d)/, "$1-$2")

    }

    return value
}


// cwcecewec
// const masks = {
//     cpf(value) {
//         return value
//             .replace(/\D/g, "")
//             .replace(/(\d{3})(\d)/, "$1.$2")
//             .replace(/(\d{3})(\d)/, "$1.$2")
//             .replace(/(\d{3})(\d{1,2})/, "$1-$2")
//             .replace(/(-\d{2})\d+?$/, "$1")
//     }
// }


// document.querySelectorAll('input').forEach(($input) => {
//     const field = $input.dataset.js

//     $input.addEventListener('input', (e) => {
//         e.target.value = masks[field](e.target.value)
//     }, false)
// })