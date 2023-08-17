//http é um protocolo (algo que deve ser seguido) (vão conversar em http)
const http = require("http");

//endereço local da máquina que será o servidor
const host = "localhost";

//a porta é um número que dá acesso ao servidor, ela pode ir de 1 à 65235
//onde vamos entrar para coletar os dados
const porta = 3000;

//é o que vem do servidor
//req= requisição, res= resposta
const resposta = function(req, res){
    res.end(`
        <html>
            <head>
                <style>
                    body {
                        background-color: #9fa4dd;
                        color: #f1f1f1
                    }
                    h1 {
                        color: #5e4d81
                    }
                </style>
            </head>
            <body>
                <h1>Sobre mim</h1>
                <p>Me chamo Valentina.</p>
                <p>Tenho 16 anos, irei fazer 17 anos daqui uma semana (praticamente), estou no quarto semestre e pretendo continuar na mesma area no curso superior.</p>
            </body>
        </html>
    `)
}

//criando o servidor
//coloca no createServe o que vai enviar para o cliente
const servidor = http.createServer(resposta)

//um servidor, nada mais é do ue um "programa" que tem como finalidade escutar uma porta e dar uma resposta
//"listen"= esta ouvindo a porta que está no host
servidor.listen(porta, host, function(){
    console.log("o servidor está funcionando!");
})