import React from "react";
import {useParams} from "react-router-dom";
import Duke from "./dog-pics/duke.jpg"
import Tubby from "./dog-pics/tubby.jpg"
import Perry from "./dog-pics/perry.jpg"
import Whiskey from "./dog-pics/whiskey.jpg"

const images = [Perry, Whiskey, Duke, Tubby]

function DogDetails({dogs}){
    const {name} = useParams()
    let dog = dogs.filter(dog => dog.name == name)
    dog = dog[0]
    const image = images.filter(x => x.includes(dog.name.toLowerCase()))
    // console.log(images, image, dog.name, "image in dogdeatils")

    return(
        <div>
            <img src={image}/>
            <br/>
            {dog.name}, {dog.age} years old
            <ul>
              {dog.facts.map(fact => <li>{fact}</li>)}
            </ul>
            
        </div>
    )
}

export default DogDetails;