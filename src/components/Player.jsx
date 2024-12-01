import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [nameState, setNameState] = useState(name);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    
    if (isEditing) {
      onChangeName(symbol, nameState);
    }
  }

  function handleInputChange(event) {
    setNameState(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={nameState}
            onChange={handleInputChange}
          />
        ) : (
          <span className="player-name">{nameState}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
