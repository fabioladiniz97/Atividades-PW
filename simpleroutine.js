
  
const http = require('http')
const port = process.env.PORT || 3000

const home = `
    <body style="background-color:#09acd5; max-width: 100vw; height: 100vh; margin:0; padding:0;">
        <div style="color:white; text-align: center; text-shadow: 2px 2px 5px black; margin-top:60px;" >
            <h1>Olá Pessoal Sejam Bem-Vindos!</h1>
            <h2> 
                 Tudo bem pessoal?<br>
                 Me chamo Fabíola Diniz, sou estudante do curso de Análise e Desenvolvimento de Sistemas<br>
                 Sou muito fã de animes, series e adoro ler.
            </h2>
            <div style="display: flex; justify-content: center; margin-top: 35px; ">
                <img src="https://64.media.tumblr.com/570ec9556110cafae44703309600788e/tumblr_pyo1mpIN8D1uaogmwo9_r1_400.png" alt="ramona" style="width:300px; border-radius: 200px;"> 
            </div>
            <p>Para ir para outra página </p>
            <br>localhost:3000/blog  ou localhost:3000/curriculo</p>
        </div>
        
    </body>
`;

const curriculo = `
    <body style="background-color:#ae0761; max-width: 100vw; height: 100vh; margin:0; padding:0;">
        <div style="color:white; text-align: center; text-shadow: 2px 2px 5px black; margin-top:30px;" >
            <h2>Curriculo</h2>
            <div>
                <h3>Formação e Experiências Acadêmicas</h3>
                <h4>Cursando ADS no IFPB,
                Me interesso pela área de Redes de computadores, java e um pouco de JS.
                </h4>
            </div>
            <div>
                <h3>Experiências</h3>
                <h4>Em busca do primiero emprego ou estágio na área de TI,
                    Cursei 3 semestres de Automação Industrial no IFPB
                    Sou uma pessoa que sempre está disposta a aprender coisas novas e gosta de desafios
                    </h4>
            </div>
            <div>
                <img src="https://i.pinimg.com/originals/9f/b7/01/9fb7019946a9eac08bc21cc8c7b114fb.jpg" alt="ramona" style="width:300px; border-radius: 200px;">

                <p>Para mudar de pagina altere a rota para:
                <br>localhost:3000/blog  ou localhost:3000/curriculo</p>
            </div>
                
        </div>
    </body>
`;

const blog = `
    <body style="background-color:#228B22; max-width: 100vw; height: 100vh; margin:0; padding:0;">  
        <div style="display: flex; justify-content: center; margin-top: 10%; flex-direction: column; color:white; text-align: center;">
            
                <h1>
                    <a style="text-decoration: none; color:white; text-shadow: 3px 3px 6px black;" href="https://www.youtube.com/watch?v=rJABBmAMXnY&ab_channel=LanaDelReyVEVO"
                    title="Lana del Rey ">A música mais injustiçada da Lana  <a/>
                </h1>
                <h1>
                    <a style="text-decoration: none; color:white; text-shadow: 3px 3px 6px black;" href="https://www.darksidebooks.com.br/madame-tussaud-a-pequena-colecionadora-de-corpos--brinde-exclusivo/p?gclid=Cj0KCQjwm6KUBhC3ARIsACIwxBgHxMP4CIPyMOqKHvRgeu6Q5APZb4sRvQhsFrSy44KktNdglM0RA1YaAhqQEALw_wcB"
                    title="Uma livraria maravilhosa ">Darkside: conheca mais sobre</a>
                </h1>
                <h1>
                    <a style="text-decoration: none; color:white; text-shadow: 3px 3px 6px black;" href="https://www.maioresemelhores.com/melhores-animes/"
                    title="Animes tops"> Os 18 melhores animes para você curtir bastante </a>
                </h1>
                    <div>
                        <p style="margin-top: 10%; padding-top: 25px; text-shadow: 2px 2px 5px black;">Para mudar de pagina altere a rota para:
                        <br>localhost:3000/curriculo  ou localhost:3000/</p>
                </div>
            
        </div>
    </body>
    
`;


const server = http.createServer((req, res) => {
    // normaliza a url removendo a querystring e a barra final
    // opcional e usando letras minúsculas
    let nome = "";
    const search = req.url.split('?')[1]
    if(search){
        let params = new URLSearchParams(search);
        nome = params.get("nome")
    }
    console.log(nome);
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
   
    switch (path) {
        case '':
            res.writeHead(200, { 'Content-Type': 'text/html; charset= utf-8' }) 
            res.end(nome ? home.replace("Pessoal Sejam Bem-Vindos",`${nome} Seja Bem-Vindo`) : home)
            break
        case '/curriculo':
            res.writeHead(200, { 'Content-Type': 'text/html; charset= utf-8' })
            res.end(curriculo)
            break
        case '/blog':
            res.writeHead(200, { 'Content-Type': 'text/html; charset= utf-8' })
            res.end(blog)
            break
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain; charset= utf-8' })
            res.end('Not Found')
            break
    }
})
server.listen(port, () => console.log(`server started on port ${port}; ` + 'press Ctrl-C to terminate....'))