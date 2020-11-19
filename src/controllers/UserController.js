import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }

    // const userExists = await User.findOne({
    //   where: { email: req.body.email },
    // });

    // if (userExists) {
    //   return res.status(400).json({
    //  error: 'Já existe um usuário com este email na base de dados' });
    // }
    // const {
    //   id, nome, sobrenome, email,
    // } = await User.create(req.body);

    // return res.json({
    //   id, nome, sobrenome, email,
    // });
  }
}

export default new UserController();
