const express = require('express');
const router = express.Router();
const LivroController = require('../controllers/LivroController');
const methodOverride = require('method-override'); // Importar method-override

router.use(methodOverride('_method')); // Usar method-override

router.get('/', LivroController.listar);
router.get('/cadastrar', LivroController.formularioCadastro);
router.post('/', LivroController.cadastrar);
router.get('/:id/editar', LivroController.formularioEditar); // Rota para exibir formulário de edição

router.put('/:id', LivroController.editar); // Rota para editar livro (PUT)

router.delete('/:id', LivroController.remover); // Rota para remover livro (DELETE)

module.exports = router;