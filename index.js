const express = require('express');
const exphbs = require('express-handlebars');
const livroRoutes = require('./routes/livroRoutes');
const sequelize = require('./config/database');
const methodOverride = require('method-override');

const app = express();
const port = 3000;

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs.engine());

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('dashboard');
});
app.use('/livros', livroRoutes);

app.use(express.urlencoded({ extended: true }));

async function iniciarServidor() {
    try{
        await sequelize.sync({ force: true });
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        app.listen(port, () => {
            console.log(`Servidor rodando em http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Erro ao conectar com o banco de dados: ', error);
    }
}

iniciarServidor();