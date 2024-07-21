import React from "react";

function CreateUserName() {
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
    } catch (error) {}
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="md:w-[50%]  h-dvh mx-auto flex flex-col justify-center items-center gap-2"
      >
        <div>
          <input
            placeholder="username..."
            type="text"
            required
            className="input"
          />
        </div>
        <div>
          <button className="primary-button">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateUserName;
