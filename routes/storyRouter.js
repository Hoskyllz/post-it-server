const router = require('express').Router()
const { getAllUserStories,getAUserStory,createStory,editStory,deleteStory , getAllStories, getAStory } = require("../controller/storyController")


//routes to get stories regardless of useer
router.get('/all', getAllStories)
router.get("/all/:storyId", getAStory)

//route for user
router.route("/").get(getAllUserStories).post(createStory)
router
    .route("/:storyId")
    .get(getAUserStory)
    .patch(editStory)
    .delete(deleteStory)



module.exports = router