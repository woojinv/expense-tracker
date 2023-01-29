import { useState } from 'react';

export default function NewTransactionPage() {
    const [newTransactionFormData, setNewTransactionFormData] = useState({
        amount: '',
        date: '',
        category: '',
        notes: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTransactionFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submit');
        try {
            const res = await fetch('/api/transactions/newTransaction', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTransactionFormData),
            });
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <h1>Create a new transaction</h1>
            <form onSubmit={handleSubmit} id="form">
                <div>
                    <label htmlFor="amount">Amount: </label>
                    <input type="number" name="amount" id="amount" value={newTransactionFormData.amount} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="date">Date: </label>
                    <input type="date" name="date" id="date" value={newTransactionFormData.date} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="category">Category: </label>
                    <input type="text" name="category" id="category" value={newTransactionFormData.category} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="notes">Notes: </label>
                    <input type="text" name="notes" id="notes" value={newTransactionFormData.notes} onChange={handleChange} />
                </div>

                <button type="submit">Create</button>
            </form>
        </>
    );
}
