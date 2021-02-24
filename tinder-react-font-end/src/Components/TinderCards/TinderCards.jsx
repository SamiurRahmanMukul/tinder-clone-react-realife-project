import React, { useState, useEffect } from "react";
import ReactTinderCard from "react-tinder-card";
import Style from "./TinderCards.module.css";
import axios from "../../axios";

const TinderCard = () => {
  /* // TODO: hardcoded data below
  const [people, setPeople] = useState([
    {
      names: "Ariful Islam Jibon",
      photo_url:
        "https://scontent.fdac12-1.fna.fbcdn.net/v/t1.0-9/96711729_1176429069374815_49443929799524352_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=PAfHPrVkSf4AX_dNINX&_nc_ht=scontent.fdac12-1.fna&oh=5f4daef330e71ed8bd41b6c4a374b70a&oe=604DDFA9",
    },
    {
      names: "Mostafa Sarowar Shato",
      photo_url:
        "https://scontent.fdac12-1.fna.fbcdn.net/v/t1.0-9/59397507_2327415034183355_3961801576133165056_o.jpg?_nc_cat=110&ccb=3&_nc_sid=a4a2d7&_nc_ohc=l8p1o-ORHTUAX_yYZEJ&_nc_ht=scontent.fdac12-1.fna&oh=30ab5a929cded71be0f4fad90c025370&oe=604E49C7",
    },
    {
      names: "Soliman Hossain Alam",
      photo_url:
        "https://scontent.fdac12-1.fna.fbcdn.net/v/t1.0-9/s851x315/137292919_241876404013302_2999018909202772308_o.jpg?_nc_cat=108&ccb=3&_nc_sid=da31f3&_nc_ohc=uOGoGIXHulAAX92psQS&_nc_ht=scontent.fdac12-1.fna&tp=7&oh=f94732a3fc3b65b346875062b65f86c3&oe=604E1EDE",
    },
    {
      names: "Samiur Rahman Mukul",
      photo_url:
        "https://scontent.fdac12-1.fna.fbcdn.net/v/t1.0-9/93426676_694607031295481_4243160966683951104_o.jpg?_nc_cat=109&ccb=3&_nc_sid=09cbfe&_nc_ohc=kUrXgSgPHhoAX8dj7qn&_nc_ht=scontent.fdac12-1.fna&oh=5df58b00841bf1fd06a470f859bf46dc&oe=604D11D2",
    },
  ]); */

  // TODO: font end hooking to backend
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");

      setPeople(req.data);
    }

    fetchData();
  }, []);

  // react tinder function
  const swiped = (direction, nameToDelete) => {
    console.log("Removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className={Style.Tinder__Card}>
      <div className={Style.Card__Container}>
        {people.map((person) => (
          <ReactTinderCard
            className={Style.Card__Swipe}
            key={person.names}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.names)}
            onCardLeftScreen={() => outOfFrame(person.names)}
          >
            <div
              style={{ backgroundImage: `url(${person.photo_url})` }}
              className={Style.Main__Card}
            >
              <h3 className={Style.Person__Name}>{person.names}</h3>
            </div>
          </ReactTinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCard;
