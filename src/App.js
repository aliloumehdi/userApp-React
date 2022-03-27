import logo from './logo.svg';
import './App.css'; 
import UserTable from './components/UserTable';

function App() {
  return (
    <div className='card m-5'>
<div className='card-header'>
 
<p class="h3">Liste des utilisateurs</p>
</div>
<div   className='separator bg-primary'>

</div>
<div className='card-body'>
<UserTable>
  
</UserTable>
</div>
    </div>
  );
}

export default App;
