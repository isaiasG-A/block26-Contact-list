import React from "react";

export default function ContactRow({setSelectedContactId, contact}) {
  return (
    <tr onClick={() => { setSelectedContactId(contact.id)}}>
    <td className="contact">{contact.title}</td>
    <td className="contact">{contact.body}</td>
  </tr>
  )
}

