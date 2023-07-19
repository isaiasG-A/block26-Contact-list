import {useState, useEffect} from "react";


export default function SelectedContact({selectedContactId, setSelectedContactId}) {
  const [contact, setContact] = useState({});

  useEffect(() => {

    async function fetchContactId() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts/${selectedContactId}`);
        const result = await response.json();
        setContact(result);

      } catch(error) {
        console.error(error);
      }
    }

    fetchContactId();
  }, []);

  return (
    <>
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Title</td>
          <td>Body</td>
        </tr>
        <tr>
         <td>{contact.title}</td>
         <td>{contact.body}</td>
         </tr>
         <button onClick={() => {setSelectedContactId(null)}}>Main Page</button>
      </tbody>
    </table>
    </>
  )
}