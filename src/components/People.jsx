import { useState } from "react";

export default function People() {
  const [people, setPeople] = useState([
    { id: "1", name: "Sinara" },
    { id: "2", name: "Opaioson" },
    { id: "3", name: "Gal" },
    { id: "4", name: "Tim Maia" },
  ]);

  return (
    <div>
      <h2>People</h2>

      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}
