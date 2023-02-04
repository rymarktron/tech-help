//go online and use Cohere api. Prompt: get instructions on how to do it with good analogies for a "kid"
// ask are you a child. adult, or senior
// ask if they are a beginner, intermediate, or experienced.
// accessibility means understanding the audience and presenting it in a way they will understand

//want to send it to phoen?
import { useState, useEffect } from 'react';

var instructions = "Explain step-by-step instructions for the following: how";

const MyComponent = () => {
  const [cohereData, setCohereData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://api.cohere.com/v1/your_endpoint');
    const data = await response.json();
    setCohereData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {cohereData.map(item => (
        <p key={item.id}>{item.text}</p>
      ))}
    </div>
  );
};

export default MyComponent;