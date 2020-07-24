var cpf = document.querySelector("#CPF");
//ID do campo onde irá digitar o CPF ou CNPJ

var celular = document.querySelector("#celular");
//ID do campo onde irá digitar o celular ou telefone

var telefone = document.querySelector("#telefone");
//ID do campo onde irá digitar o celular ou telefone

var rg = document.querySelector("#rg");
//ID do campo onde irá digitar o RG

if (rg != null) {
    rg.addEventListener("keyup", () => {
        rg.value = maskRG(rg.value);
    });
}

if (celular != null) {
    celular.addEventListener("keyup", () => {
        celular.value = maskPhone(celular.value);
    });
}

if (telefone != null) {
    telefone.addEventListener("keyup", () => {
        telefone.value = maskPhone(telefone.value);
    });
}

if (cpf != null) {
    cpf.addEventListener("keyup", () => {
        cpf.value = maskCpfCnpj(cpf.value);
    });
}

function maskPhone(value) {
    v = value;
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{2})(\d)/, "($1) $2");
    v = v.replace(/(\d{4})(\d)/, "$1-$2");
    v = v.replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3");
    v = v.replace(/(-\d{4})\d+?$/, "$1");

    return v;
}

function maskRG(value) {
    a = value;
    a = a.replace(/\D/g, ""); //Não deixa digitar letras

    if (a.length <= 7) {
        a = a.replace(/(\d{1})(\d)/, "$1.$2");
        a = a.replace(/(\d{3})(\d)/, "$1.$2");
        a = a.replace(/(.\d{3})\d+?$/, "$1");
    } else {
        a = a.replace(/(\d{3})(\d)/, "$1.$2");
        a = a.replace(/(\d{3})(\d)/, "$1.$2");
        a = a.replace(/(.\d{3})\d+?$/, "$1");
    }

    return a;
}

function maskCpfCnpj(value) {
    value = value.replace(/\D/g, "");

    if (value.length <= 11) {
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    } else {
        value = value.replace(/^(\d{2})(\d)/, "$1.$2");
        value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
        value = value.replace(/(\d{4})(\d)/, "$1-$2");
        value = value.replace(/(-\d{2})\d+?$/, "$1");

    }

    return value
}