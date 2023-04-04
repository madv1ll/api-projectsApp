import { Router } from "express";
import { getEmployees, getEmployee, saveEmployee, updateEmployee, deleteEmployee, updateEmployeeAssistance } from "../controllers/employee";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Employees
 *  description: Employees management
 */

/**
 * @swagger
 * /employees/{projectId}:
 *  get:
 *   summary: Get all employees of the project
 *   tags: [Employees]
 *   parameters: 
 *    - in: path
 *      name: proyectid
 *      required: true
 *      description: The id of the project
 */
router.get("/employees/:projectid", getEmployees);

/**
 * @swagger
 * /employees/desc/{employeeId}:
 *  get:
 *   summary: Get an employee by Id
 *   tags: [Employees]
 *   parameters: 
 *    - in: path
 *      name: employeeId
 *      required: true
 *      description: The id of the employee
 */
router.get("/employees/desc/:employeeId", getEmployee);

/**
 * @swagger
 * /employees:
 *  post:
 *   summary: Create an employee
 *   tags: [Employees]
 *   parameters:
 *    - in: body
 *      name: name
 *      required: true
 *      description: The employee's name
 *    - in: body
 *      name: lastname
 *      required: true
 *      description: The employee's last name
 *    - in: body
 *      name: startdate
 *      required: true
 *      description: The date of the employee's start
 *    - in: body
 *      name: finishdate
 *      required: true
 *      description: The date of the employee's finish
 *    - in: body
 *      name: salary
 *      required: true
 *      description: The salary of the employee
 */
router.post("/employees", saveEmployee);


/**
 * @swagger
 * /employees/{employeeId}:
 *  put:
 *   summary: Update an employee
 *   tags: [Employees]
 *   parameters:
 *    - in: path
 *      name: employeeId
 *      required: true
 *      description: The id of the employee
 *    - in: body
 *      name: name
 *      required: true
 *      description: The employee's name
 *    - in: body
 *      name: lastname
 *      required: true
 *      description: The employee's last name
 *    - in: body
 *      name: startdate
 *      required: true
 *      description: The date of the employee's start
 *    - in: body
 *      name: finishdate
 *      required: true
 *      description: The date of the employee's finish
 *    - in: body
 *      name: salary
 *      required: true
 *      description: The salary of the employee
 */
router.put("/employees/:employeeId", updateEmployee);

/**
 * @swagger
 * /employees/{employeeId}:
 *  delete:
 *   summary: Delete an employee
 *   tags: [Employees]
 *   parameters:
 *    - in: path
 *      name: employeeId
 *      required: true
 *      description: The id of the employee
 */
router.delete("/employees/:employeeId", deleteEmployee);

/**
 * @swagger
 * /employees/{employeeId}/assistance:
 *  post:
 *  summary: Assistance of employee
 *  tags: [Employees]
 *  parameters:
 *   - in: path
 *     name: employeeId
 *     required: true
 *     description: The id of the employee
 *   - in: body
 *     name: days
 *     required: true
 *     description: The days of the employee's assistance
 */
router.post("/employees/:employeeId/assistance", updateEmployeeAssistance);

export default router;