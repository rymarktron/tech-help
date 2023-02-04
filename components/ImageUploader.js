import Image from 'next/image'

//API Key Needed
require("dotenv").config(); //read the .env file and make it available
console.log(process.env.COHERE_API_KEY);

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const MyImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src="me.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}