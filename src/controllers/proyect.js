import { connect } from "../database";

export const getProyects = async (req, res) => {
    const {rows} = await connect.query("SELECT id, name, TO_CHAR(startdate, 'DD-MM-YYYY') AS startdate, TO_CHAR(finishdate, 'DD-MM-YYYY') AS finishdate, price FROM proyect ORDER BY id ASC");
    res.json(rows);
};
export const getProyect = async (req, res) => {
    const {rows} = await connect.query("SELECT id, name, TO_CHAR(startdate, 'DD-MM-YYYY') AS startdate, TO_CHAR(finishdate, 'DD-MM-YYYY') AS finishdate, price FROM proyect WHERE id =$1 ",[req.params.id]);
    res.json(rows[0]);
};
export const getProyectCount = async (req, res) => {
    const {rows} = await connect.query('SELECT COUNT(*) AS res FROM proyect');
    res.json(rows[0].res);
};
export const saveProyect = async (req, res) => {
    const result = await connect.query(`INSERT INTO proyect (name, startDate, finishDate, price) VALUES ($1,$2,$3,$4)`, [req.body.name, req.body.startDate, req.body.finishDate, req.body.price]);
    res.sendStatus(204);
};
export const deleteProyect = async (req, res) => {
    await connect.query('DELETE FROM proyect WHERE id =$1', [req.params.id]);
    res.sendStatus(204);
};
export const updateProyect = async (req, res) => {
    await connect.query(`UPDATE proyect SET name = $1, startDate= $2, finishDate=$3, price=$4 WHERE id =$5`, [req.body.name, req.body.startDate, req.body.finishDate, req.body.price,req.params.id]);
    res.sendStatus(204);
};