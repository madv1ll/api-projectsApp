import { Router } from "express";
import { deleteProyect, getProyect, getProyectCount, getProyects, saveProyect, updateProyect } from "../controllers/proyect";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Proyect
 *  description: Proyect management
 */

/**
 * @swagger
 * /proyects:
 *  get:
 *   summary: Get all proyects
 *   tags: [Proyect]
 */
router.get("/proyects", getProyects);

/**
 * @swagger
 * /proyects/count:
 *  get:
 *   summary: Count all proyects
 *   tags: [Proyect]
 */
router.get("/proyects/count", getProyectCount);

/**
 * @swagger
 * /proyect/{id}:
 *  get:
 *   summary: Get a proyect by id
 *   tags: [Proyect]
 */
router.get("/proyects/:id", getProyect);

/**
 * @swagger
 * /proyects:
 *  post:
 *   summary: save a proyect
 *   tags: [Proyect]
 */
router.post("/proyects", saveProyect);

/**
 * @swagger
 * /proyects/{id}:
 *  delete:
 *   summary: delete a proyect
 *   tags: [Proyect]
 */
router.delete("/proyects/:id", deleteProyect);

/**
 * @swagger
 * /proyects/{id}:
 *  put:
 *   summary: modify a proyect
 *   tags: [Proyect]
 */
router.put("/proyects/:id", updateProyect);

export default router;