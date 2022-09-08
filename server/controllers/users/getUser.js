const { getUserQuery } = require('../../database/queries')

const getUserController = (req, res) => {
    const { id } = req.params;
  
    getUserQuery(id)
      .then((data) => res.json(data.rows[0]))
      .catch(() => res.status(500).json({ message: "server error !" }));
  };
  

module.exports = getUserController;