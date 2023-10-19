function imprimirSecuenciaDescendente(numero) {
    if (numero >= 0) {
        console.log(numero);
        imprimirSecuenciaDescendente(numero - 1);
    }
}

imprimirSecuenciaDescendente(15)