const express=require("express")
const router= express.Router()

router.get("/", require("./controller.todos").getAll)
router.post("/", require("./controller.todos").addData)
router.put("/:id", require("./controller.todos").updateData)
router.delete("/:id", require("./controller.todos").deleteData)




module.exports=router