function SecuenciaDescendente(n) {
    if (n>= 0) {
        console.log(n);
        SecuenciaDescendente(n - 1);
    }
}
SecuenciaDescendente(15)