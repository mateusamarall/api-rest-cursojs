class HomeController {
  index(req, res) {
    res.status(200).json({ ok: 'hello world' });
  }
}

export default new HomeController();
