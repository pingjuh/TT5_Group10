import React from 'react'
import { Link } from "react-router-dom";

const EditExpense = () => {
  return (
    <div>
        <div>
            Edit Expense
        </div>
        <Link to="/projects"><Button>
            Edit
        </Button></Link>

        <Button>
            Delete
        </Button>
    </div>
  )
}

export default EditExpense
