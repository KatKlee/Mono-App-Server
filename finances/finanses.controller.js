import {createFinances, getFinances, editFinances} from "./finanses.service.js";

export const create = async (req, res) => {
    const body = req.body;
    console.log("body addOne", body);
    const result = await createFinances(body);
    res.status(201).json({message:"transaction was added", data: result});
};

export const get = async (req, res) => {
    const result = await getFinances();
    res.status(201).json({message:"got finances", data: result});
};

export const edit = async (req, res) => {

};

