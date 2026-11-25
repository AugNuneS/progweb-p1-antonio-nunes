import { Router } from 'express';
import { contaController } from '../controllers/contaController.js';

const router = Router();

router.get('/', contaController.listar);
router.post('/', contaController.criar);
router.get('/:id', contaController.buscarPorId);
router.put('/:id', contaController.atualizar);
router.delete('/:id', contaController.remover);

export default router;
