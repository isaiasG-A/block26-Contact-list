import React from "react";

export default function ContactRow({setSelectedContactId, contact}) {
  return (
    <tr onClick={() => { setSelectedContactId(contact.id)}}>
    <td>{contact.title}</td>
    <td>{contact.body}</td>
  </tr>
  )
}

