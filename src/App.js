
import './App.css';
import ProfileComponent from './Profile/ProfileComponent';

function App() {
  const lastName="Bougda"
  const handleMessage = alert(`hello I'm  ${lastName} Bacem`)
  return (
<div>
  <h1>hello world</h1>
<ProfileComponent handleMessage={handleMessage}   fullname="bacem" lastName={lastName} profession="web developper"  bio="est un écrit qui a pour objet l'histoire d'une vie particulière ou d'un événement dans la vie du protagoniste."  />
</div>
  );
}

export default App;
