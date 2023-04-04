import { connect } from "../database";

export const getEmployees = async (req, res) => {
    const {rows} = await connect.query("SELECT id, name, lastname, TO_CHAR(startdate, 'DD-MM-YYYY') AS startdate, TO_CHAR(finishdate, 'DD-MM-YYYY') AS finishdate, projectid, salary, workdays FROM employee WHERE projectid = $1 ORDER BY id ASC", [req.params.projectid]);
    res.json(rows);
};

export const getEmployee = async (req, res) => {
    const {rows} = await connect.query("SELECT id, name, lastname, TO_CHAR(startdate, 'DD-MM-YYYY') AS startdate, TO_CHAR(finishdate, 'DD-MM-YYYY') AS finishdate, projectid, salary, workdays FROM employee WHERE id = $1 ORDER BY id ASC", [req.params.employeeId]);
    res.json(rows);
};

export const saveEmployee = async (req, res) => {
    const row = await connect.query('INSERT INTO employee (name, lastname, startdate, finishdate, projectid, salary, workdays) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
        [req.body.name,
        req.body.lastname,
        req.body.startdate,
        req.body.finishdate,
        req.body.projectid,
        req.body.salary,
        req.body.workdays]);
    console.log(row)
};

export const updateEmployee = async (req, res) => {
    const {rowCount} = await connect.query('UPDATE employee SET name = $1, lastname =$2, startdate = $3, finishdate = $4, projectid = $5, salary = $6, workdays = $7 WHERE id = $8', 
        [req.body.name,
        req.body.lastname,
        req.body.startdate,
        req.body.finishdate,
        req.body.projectid,
        req.body.salary,
        req.body.workdays,
        req.params.employeeId]);
    res.json({rowCount});
};

export const deleteEmployee = async (req, res) => {
    const {rowCount} = await connect.query('DELETE FROM employee WHERE id = $1', [req.params.employeeId]);
    res.json({rowCount});
};