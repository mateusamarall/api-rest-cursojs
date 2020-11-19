import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'mateus',
      sobrenome: 'amaral',
      email: 'mateus.amaral018@gmail.com',
      idade: 19,
      peso: 70,
      altura: 1.75,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
