import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        required: false,
    },
});

export default mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);
