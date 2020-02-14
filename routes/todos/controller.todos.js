const { todos } = require("../../models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await todos.findAll();

      res.status(200).send({
        message: "show all data",
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },
  addData: async (req, res) => {
    try {
      const result = await todos.create(req.body);

      res.status(200).send({
        message: "add data",
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateData: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await todos.update(req.body, { where: { id } });

      res.status(200).send({
        message: "update data",
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteData: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await todos.destroy({ where: { id } });

      res.status(200).send({
        message: "delete data",
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  }
};
