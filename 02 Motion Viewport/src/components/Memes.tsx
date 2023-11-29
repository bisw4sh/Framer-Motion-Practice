import Meme from "./Meme.tsx";
import meme1 from "../../public/memes/1.png";
import meme2 from "../../public/memes/2.jpg";
import meme3 from "../../public/memes/3.jpg";
import meme4 from "../../public/memes/4.jpeg";
import meme5 from "../../public/memes/5.jpg";
import meme6 from "../../public/memes/6.jpg";
import meme7 from "../../public/memes/7.jpg";

interface Meme {
  imgSrc: string;
  desc: string;
}

export default function Memes() {

const data: Meme[] = [
{
    imgSrc: meme1,
    desc: "Chasis requires two images mandatory",
},
{
    imgSrc: meme2,
    desc: "Rajnikanth so old that half the budget goes to make him look young",
},
{
    imgSrc: meme3,
    desc: "Moye Moye",
},
{
    imgSrc: meme4,
    desc: "Code so shit, I can't risk making it public",
},
{
    imgSrc: meme5,
    desc: "Pains literal pains, with bronchial asthma",
},
{
    imgSrc: meme6,
    desc: "Kamar, fuck you",
},
{
    imgSrc: meme7,
    desc: "Gay Gay",
}
]

return (
  <div className="h-fit wi-full p-8">
    <h1 className="flex justify-center items-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600">
      {" "}
      Example of motion animation on view port
    </h1>
    {data.map(({ imgSrc, desc }, idx) => (
      <Meme key={idx} imgSrc={imgSrc} desc={desc} />
    ))}
  </div>
);
}