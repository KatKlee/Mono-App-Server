import connect from "../utils/db.js";
import {ObjectId} from "mongodb";

export const createFinances = async (id) => {
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

export const getFinances = async () => {
    const db = await connect();
            const finances = await db.collection("finances").find().toArray();
            console.log("@ getfinances", finances);
            return finances;
    }


export const editFinances = async (type, amount) => {
    console.log("type, amount", type, amount);
    const db = await connect();
    const finances = await db.collection("finances").find().toArray();
    console.log("@ editFinances", finances);
    switch(type){
        case "income":
            const result = await db.collection("finances").updateOne(
                {UserId: new ObjectId("6374cca889a89c4aa72488ca")}, {$set: {
                    total_balance: Number(finances[0].total_balance) + Number(amount),
                    total_income: Number(finances[0].total_income) + Number(amount)
                }}
            );
            console.log("result editFinances", result);
            return result;
        case "expense":
            const result2 = await db.collection("finances").updateOne(
                {UserId: new ObjectId("6374cca889a89c4aa72488ca")}, {$set: {
                        total_balance: Number(finances[0].total_balance) - Number(amount),
                        total_expense: Number(finances[0].total_expense) + Number(amount),
                    }}
            );
            return result2;
    }
}



