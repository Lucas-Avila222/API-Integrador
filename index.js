import express from 'express';
 import knex from "knex";
 const app = express()
 app.use(express.json());
 const port = 3006
 
 const mysql2 = knex({
     client: 'mysql2',
     connection: {
       host: '127.0.0.1',
       port: 3306,
       user: 'root',
       password: 'senacrs',
       database: 'mounted_style',
     }
   });
 
   app.get("/", (req, res) => {
    res.send("Project API is running");
  });


  app.get("/funcionarios", async (req, res) => {
    const { id } = req.params;
    const funcionarios = await mysql2.select("*").from("funcionarios");
    res.json(funcionarios);
  });

    app.post('/funcionarios', async (req, res) => {
    const { nome, cargo, salario } = req.body;
    const [id] = await bancoDeDados("funcionarios").insert({imagen, nome_completo, nascimento, e_mail, cargo, telefone});
    console.log('Funcionário cadastrado:', {imagen, nome_completo, nascimento, e_mail, cargo});
    res.status(201).json({ mensagem: 'Funcionário cadastrado com sucesso!' });
});

    app.post('/clientes', async (req, res) => {
    const { nome, email, telefone } = req.body;
    const [id] = await bancoDeDados("funcionarios").insert({imagen, nome, nascimento, e_mail, telefone, senha_cliente});
    console.log('Cliente cadastrado:', { imagem, nome, nascimento, e_mail});
    res.status(201).json({ mensagem: 'Cliente cadastrado com sucesso!' });
});

    app.listen(port, () => {
  console.log(`App de exemplo está rodando na porta ${port}`);
});



  app.get("/clientes", async (req, res) => {
    const { id } = req.params;
    const clientes = await mysql2.select("*").from("clientes");
    res.json(clientes);
  });

  
  app.get("/tipo", async (req, res) => {
    const { id } = req.params;
    const tipo = await mysql2.select("*").from("tipo");
    res.json(tipo);
  });


  app.get("/bike_Montada", async (req, res) => {
    const { id } = req.params;
    const bike_Montada = await mysql2.select("*").from("bike_Montada");
    res.json(bike_Montada);
  });


app.get("/Quadro", async (req, res) => {
  const { id } = req.params;
  const Quadro = await mysql2.select("*").from("Quadro");
  res.json(Quadro)
});


app.get("/acessorios", async (req, res) => {
  const { id } = req.params;
  const acessorios = await mysql2.select("*").from("acessorios");
  res.json(acessorios)
});


app.get("/personalizada", async (req, res) => {
  const { id } = req.params;
  const personalizada = await mysql2.select("*").from("personalizada");
  res.json(personalizada)
});


app.get("/pedido", async (req, res)  => {
const { id } = req.params;
const pedido = await mysql2.select("*").from("personalizada");
});


app.get("/historico_compras", async (req, res)  => {
  const { id } = req.params;
  const historico_compras = await mysql2.select("*").from("historico_compras");
  });


 app.listen(port, () => {
   console.log(`Example app is running on the port ${port}`)
 });