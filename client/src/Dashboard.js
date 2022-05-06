import Button from './Button'

const Dashboard = () => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header>
            <h1>Dashboard</h1>
            <Button text = 'Add Projects' onClick = {onClick}/>
            <Button text = 'Add Expenses' onClick = {onClick}/>
        </header>
    )
}

export default Dashboard;
