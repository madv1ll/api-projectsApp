import { Router } from "express";
import { getItem, getItems, saveItem, updateItem, deleteItem } from "../controllers/item";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Items
 *  description: Proyect items Management
 */

/**
 * @swagger
 * /items/{proyectid}:
 *  get:
 *   summary: Get all items of the project
 *   tags: [Items]
 *   parameters: 
 *    - in: path
 *      name: proyectid
 *      required: true
 *      description: The id of the proyect
 */
router.get("/items/:proyectid", getItems);

/**
 * @swagger
 * /items/desc/{id}:
 *  get:
 *   summary: Get all properties of the item
 *   tags: [Items]
 *   parameters: 
 *    - in: path
 *      name: id
 *      required: true
 *      description: The id of the item
 */
router.get("/items/desc/:id", getItem);

/**
 * @swagger
 * /items:
 *  post:
 *   summary: Create a new item
 *   consumes:
 *    - application/json
 *   tags: [Items]
 *   parameters: 
 *    - in: formData
 *      name: name
 *      required: true
 *      description: The name of the item
 *    - in: formData
 *      name: unitPrice
 *      required: true
 *      description: The unit price of the item
 *    - in: formData
 *      name: quantity
 *      required: true
 *      description: The quantity bought of the item
 *    - in: formData
 *      name: totalPrice
 *      required: true
 *      description: The total price of the item
 *    - in: formData
 *      name: proyectId
 *      required: true
 *      description: The id of the proyect where the item will be created
 *    - in: formData
 *      name: purchaseDate
 *      required: true
 *      description: The date when the item was purchased
 */
router.post("/items", saveItem);

/**
 * @swagger
 * /items/{id}:
 *  put:
 *   summary: Modify an item
 *   consumes:
 *    - application/json
 *   tags: [Items]
 *   parameters: 
 *    - in: path
 *      name: id
 *      required: true
 *      description: The id of the item
 *    - in: formData
 *      name: name
 *      required: true
 *      description: The name of the item
 *    - in: formData
 *      name: unitPrice
 *      required: true
 *      description: The unit price of the item
 *    - in: formData
 *      name: quantity
 *      required: true
 *      description: The quantity bought of the item
 *    - in: formData
 *      name: totalPrice
 *      required: true
 *      description: The total price of the item
 *    - in: formData
 *      name: proyectId
 *      required: true
 *      description: The id of the proyect where the item will be created
 *    - in: formData
 *      name: purchaseDate
 *      required: true
 *      description: The date when the item was purchased
 */
router.put("/items/:id", updateItem);

/**
 * @swagger
 * /items:
 *  delete:
 *   summary: Delkete an item
 *   tags: [Items]
 *   parameters: 
 *    - in: path
 *      name: id
 *      description: The id of the item
 */
router.delete("/items/:id", deleteItem);


export default router;