import List from './components/List';
import ListItem from './components/ListItem';

export default function App() {
  const dummyArr = [1, 2, 3];

  return (
    <main id='app-container'>
      <List>
        {dummyArr.map(index => (
          <ListItem key={index} index={index} />
        ))}
      </List>
    </main>
  );
}
