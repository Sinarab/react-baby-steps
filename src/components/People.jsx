import { useEffect, useState } from "react";

export default function People() {
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const resp = await fetch(url);
    const users = await resp.json();
    setPeople(users);
  };

  useEffect(() => {
    setTimeout(() => getPeople(), 700);
  }, []);

  return (
    <div>
      <h2>People</h2>

      {people.length === 0 && (
        <div>
          <h3>Loading...</h3>
        </div>
      )}

      {people.length > 0 && (
        <ul>
          {people.map((person) => (
            <li key={person.id}>
              {person.name} || {person.website}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
