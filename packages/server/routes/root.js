export default function root() {
  return function (req, res) {
    res.json({ status: 'success' });
  };
}
