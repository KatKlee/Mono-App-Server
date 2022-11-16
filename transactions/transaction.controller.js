import {addTransaction, deleteTransaction, editTransaction, getTransactions} from "./transaction.service.js";

export const addOne = async (req, res) => {
    console.log("@ addOne", req.body);
    const body = req.body;
    const result = await addTransaction(body);
    res.status(201).json({message:"transaction was added", data: result});
};

export const getSome = async (req, res) => {
    console.log("on transactions...")
    const id = req.query.id;
    console.log("id getSome",id);
    const result = await getTransactions(id);
    res.status(201).json({message:"got transactions", data: result});
};

export const deleteOne = async (req, res) => {
    const id = req.query.id;                            //if there is no query, so id would be undefined
    console.log("id getSome",id);
    const result = await deleteTransaction(id);
    res.status(201).json({message:"transaction was deleted", data: result});
};

export const editOne = async (req, res) => {
    const id = req.query.id;
    const update = req.body;                            // update object witch key and value {total_balance: 400$}
    console.log("update @ editOne", update);
    const result = await editTransaction(id, update);
    res.status(201).json({message: "transaction was edited", data: result});
};
