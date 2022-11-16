import connect from "../utils/db.js";
import {ObjectId} from "mongodb";

//finances Service
import {editFinances, getFinances} from "../finances/finanses.service.js";

export const addTransaction = async (body) => {
    const date = body.date.split("-");
    const newDate = new Date(date[0], date[1]-1, date[2]);

    const result1 = await editFinances(body.type, body.amount);

    const finances = await getFinances();
    console.log("@ transaction service", finances);

    const db = await connect();
    const result2 = await db.collection("transactions").insertOne({
        userid: new ObjectId("6374cca889a89c4aa72488ca"),
        name: body.name,
        amount: body.amount,
        date: newDate,
        receipt: body.receipt,
        type: body.type,
        total_balance: finances[0].total_balance,
    });
    return result2;
}

export const getTransactions = async (id) => {
    const db = await connect();
    switch (id) {
        case undefined:
            const allTransactions = await db.collection("transactions").find().toArray();
            return allTransactions;
        default:
            const transaction = await db.collection("transactions").findOne({transactionID: id});
            return transaction;
    }
}

export const deleteTransaction = async (id) => {
    const db = await connect();
    const result = await db.collection("transactions").deleteOne({transactionID: id});
    return result;
}

export const editTransaction = async (id, update) => {
    const db = await connect();
    const result = await db.collection("transactions").updateOne({transactionID: id}, {$set: {...update}});
    return result;
}



