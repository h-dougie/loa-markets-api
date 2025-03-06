import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CharacterInfo() {
  const { name } = useParams();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacter = async () => {
      const response = await (
        await fetch(
          `https://developer-lostark.game.onstove.com/characters/${name}/siblings`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: "",
            },
          }
        )
      ).json();

      setCharacters(
        response.sort((a, b) => (a.ItemMaxLevel < b.ItemMaxLevel ? 1 : -1)) // ItemMaxLevel의 내림차순으로 정렬렬
      );
    };

    getCharacter(); // 위 비동기 함수 호출
  }, [name]);

  console.log(characters);
  return <div></div>;
}

export default CharacterInfo;
