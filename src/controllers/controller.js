const homePage = (req, res) => {
  res.send();
};

const infoPage = (req, res) => {
  res.status(200).json({ nom: "debruyne", prenom: "remi", age: 25 });
};

const forbiddenAccessPage = (req, res) => {
  res.status(403).send("Accès interdit");
};

const redirection = (req, res) => {
    res.status(301).redirect('/')
};

const notFoundPage = (req, res) => {
    res.status(404).send('Erreur 404')
}

module.exports = { homePage, infoPage, forbiddenAccessPage, redirection, notFoundPage };
