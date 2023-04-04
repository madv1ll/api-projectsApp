import { connect } from "../database";

export const getEmployees = async (req, res) => {
    const {rows} = await connect.query("SELECT id, name, lastname, TO_CHAR(startdate, 'DD-MM-YYYY') AS startdate, TO_CHAR(finishdate, 'DD-MM-YYYY') AS finishdate, projectid, salary FROM employee WHERE projectid = $1 ORDER BY id ASC", [req.params.projectid]);
    res.json(rows);
};

export const getEmployee = async (req, res) => {
    const {rows} = await connect.query("SELECT id, name, lastname, TO_CHAR(startdate, 'DD-MM-YYYY') AS startdate, TO_CHAR(finishdate, 'DD-MM-YYYY') AS finishdate, projectid, salary FROM employee WHERE id = $1 ORDER BY id ASC", [req.params.employeeId]);
    res.json(rows);
};

export const saveEmployee = async (req, res) => {
    console.log('body:',req.body.name,
        req.body.lastname,
        req.body.startdate,
        req.body.finishdate,
        req.body.projectid,
        req.body.salary)
    const {rowCount} = await connect.query('INSERT INTO employee (name, lastname, startdate, finishdate, projectid, salary) VALUES ($1, $2, $3, $4, $5, $6)', 
        [req.body.name,
        req.body.lastname,
        req.body.startdate,
        req.body.finishdate,
        req.body.projectid,
        req.body.salary]);
    await connect.query("INSERT INTO employee_assitance (employee_id, workDays) VALUES ($1, 0)",[req.body.employee_id, req]);
    res.json({rowCount});
};

export const updateEmployee = async (req, res) => {
    const {rowCount} = await connect.query('UPDATE employee SET name = $1, lastname =$2, startdate = $3, finishdate = $4, projectid = $5, salary = $6 WHERE id = $7', 
        [req.body.name,
        req.body.lastname,
        req.body.startdate,
        req.body.finishdate,
        req.body.projectid,
        req.body.salary,
        req.params.employeeId]);
    res.json({rowCount});
};

export const deleteEmployee = async (req, res) => {
    const {rowCount} = await connect.query('DELETE FROM employee WHERE id = $1', [req.params.employeeId]);
    res.json({rowCount});
};

export const updateEmployeeAssistance = async (req, res) => {
    const {rowCount} = await connect.query("UPDATE employee_assistance SET workdays = $1 WHERE employeeid = $2", [req.body.days, req.params.employeeId]);
    res.json({rowCount});
};

export const getEmployeeAssistance = async (req, res) => {
    const {rows} = await connect.query("SELECT * FROM employee_assistance WHERE employee_id = $1", [req.params.employeeId]);
    res.json(rows);
};