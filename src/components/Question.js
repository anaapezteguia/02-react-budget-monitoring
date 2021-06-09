import React from 'react';

const Question = () => {
  return (
    <>
      <h2>What's your budget estimation?</h2>
      <form>
        <input
          type="number"
          className="u-full-width"
          placeholder="Write your estimation here"
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Set budget"
        />
      </form>
    </>
  );
};

export default Question;
