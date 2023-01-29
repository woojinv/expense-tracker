import dbConnect from '../../../lib/dbConnect';
import Transaction from '../../../models/Transaction';

export default async function transactions(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    await dbConnect();
    const transaction = await Transaction.create(req.body);
    console.log(transaction, '<<< transaction');
    const { amount, date, category, notes } = req.body;
    console.log(amount, date, category, notes);
    return res.status(200).json({ message: 'Success', transaction });
}
