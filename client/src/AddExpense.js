import { useState } from 'react'
import axios from 'axios'

const AddExpense = ({ onAdd }) => {
    {/*const [id, setId] = useState('')*/}
    const [projectId, setProjectId] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [createdBy, setCreatedBy] = useState('')
    const [updatedBy, setUpdatedBy] = useState('')



    const add = async expense => {
        const config = {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
          const res = await axios.post('http://localhost:3001/expenses', expense, config);
        } catch (err) {
          console.log(err);
        }
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        add({ projectId, categoryId, name, description, amount, createdBy, updatedBy });
        setProjectId('');
        setCategoryId('');
        setName('');
        setDescription('');
        setAmount('');
        setCreatedBy('');
        setUpdatedBy('');
    }

    return (
        <form 
          onSubmit={onSubmit}
        >
          <div>
            <label>Id</label>
          </div>
          
          <div>
            <label>ProjectID: </label>
              <input
              type='text'
              placeholder='Add ProjectID'
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              />
          </div>

          <div>
            <label>Name: </label>
              <input
              type='text'
              placeholder='Add Expense Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
          </div>

          <div>
            <label>Description</label>
              <input
              type='text'
              placeholder='Add Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              />
          </div>

          <div>
            <label>Amount: </label>
              <input
              type='text'
              placeholder='Add Expense Name'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              />
          </div>

          <div>
            <label>Created by: </label>
              <input
              type='text'
              placeholder='Add user name'
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
              />
          </div>

          <div>
            <label>Created by: </label>
              <input
              type='text'
              placeholder='Add user name'
              value={updatedBy}
              onChange={(e) => setUpdatedBy(e.target.value)}
              />
          </div>

          <input type='submit' value='Save Expense' />
    </form>

  )
}

export default AddExpense
