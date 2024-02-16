import { useSelector } from 'react-redux';

export default function TodoList() {
   const store = useSelector((store) => {
      return store;
   });
   console.log(store);

   return (
      <ul>
         <li>Fazer café</li>
         <li>Estudar Redux</li>{' '}
      </ul>
   );
}
