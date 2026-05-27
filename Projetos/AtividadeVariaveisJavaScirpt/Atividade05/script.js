const VerificarLogin = (Usuario, Senha) => {
    if (Usuario === "admin" && Senha === "1234") {
        return "Login bem-sucedido!";
    } else {
        return "Login falhou. Verifique seu usuário e senha.";
    }
}

console.log(VerificarLogin("admin", "1234"))