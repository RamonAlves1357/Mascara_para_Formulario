var cpf = document.querySelector("#cpf");
//ID do campo onde irá digitar o CPF ou CNPJ

var celular = document.querySelector("#celular");
//ID do campo onde irá digitar o celular ou telefone

var rg = document.querySelector("#RG");
//ID do campo onde irá digitar o RG

celular.addEventListener("keyup", () => {
    celular.value = maskPhone(celular.value);
});

cpf.addEventListener("keyup", () => {
    cpf.value = maskCpfCnpj(cpf.value);
});

rg.addEventListener("keyup", () => {
    rg.value = maskRG(rg.value);
});

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
    a = a.replace(/(\d{1})(\d)/, "$1.$2");
    a = a.replace(/(\d{3})(\d)/, "$1.$2");
    a = a.replace(/(.\d{3})\d+?$/, "$1");

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