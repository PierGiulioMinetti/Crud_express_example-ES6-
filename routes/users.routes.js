import express from "express";

/**
 * import controllers 
 */
import { getUsers, getUser, createUser, patchUser, deleteUser } from '../controllers/users.controllers.js'






const router = express.Router();
/**
 * we define the routes in the routes folder, than in the main js file we apply the routes to that endpoint with --> use('endpoint', Route);
 */



router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/', createUser)

router.patch('/:id', patchUser)

router.delete('/:id',)

export default router;