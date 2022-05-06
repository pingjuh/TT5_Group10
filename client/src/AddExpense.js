import { useState } from 'react'
import axios from 'axios'

const AddExpense = ({ onAdd }) => {
    const [id, setId] = useState('')
    const [project_id, setProjectId] = useState('')
    const [category_id, setCategoryId] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [created_by, setCreatedBy] = useState('')
    const [updated_by, setUpdatedBy] = useState('')



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
        add({ id, project_id, category_id, name, description, amount, created_by, updated_by })
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
            <label>ID: </label>
              <input
              type='text'
              placeholder='Add ID'
              value={id}
              onChange={(e) => setId(e.target.value)}
              />
          </div>

          <div>
            <label>ProjectID: </label>
              <input
              type='text'
              placeholder='Add Project ID'
              value={project_id}
              onChange={(e) => setProjectId(e.target.value)}
              />
          </div>

          <div>
            <label>Category ID: </label>
              <input
              type='text'
              placeholder='Add Category ID'
              value={category_id}
              onChange={(e) => setCategoryId(e.target.value)}
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
              value={created_by}
              onChange={(e) => setCreatedBy(e.target.value)}
              />
          </div>

          <div>
            <label>Created by: </label>
              <input
              type='text'
              placeholder='Add user name'
              value={updated_by}
              onChange={(e) => setUpdatedBy(e.target.value)}
              />
          </div>

          <input type='submit' value='Save Expense' />
    </form>

  )
}

export default AddExpense
