import { connect } from "../database";

export const getItems = async (req, res) => {
    const {rows} = await connect.query('SELECT * FROM item WHERE proyectid = $1 ORDER BY id ASC', [req.params.proyectid]);
    res.json(rows);
}

export const getItem = async (req, res) => {
    const {rows} = await connect.query('SELECT * FROM item WHERE id = $1', [req.params.id]);
    res.json(rows);
};

export const saveItem = async (req, res) => {
    const {rowCount} = await connect.query('INSERT INTO item (name, unitPrice, quantity, totalPrice, proyectId, purchaseDate) VALUES ($1, $2, $3, $4, $5, $6)', 
        [req.body.name,
        req.body.unitPrice,
        req.body.quantity,
        req.body.totalPrice,
        req.body.proyectId,
        req.body.purchaseDate]);
    res.json({rowCount});
};

export const updateItem = async (req, res) => {
    const {rowCount} = await connect.query('UPDATE item SET name = $1, unitPrice = $2, quantity = $3, totalPrice = $4, proyectId = $5, purchaseDate = $6 WHERE id = $7', 
        [req.body.name,
        req.body.unitPrice,
        req.body.quantity,
        req.body.totalPrice,
        req.body.proyectId,
        req.body.purchaseDate,
        req.params.id]);
    res.json({rowCount});
};

export const deleteItem = async (req, res) => {
    const {rowCount} = await connect.query('DELETE FROM item WHERE id = $1', [req.params.id]);
    res.json({rowCount});
};