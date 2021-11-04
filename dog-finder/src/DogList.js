import React from "react"
import {} from "react-router-dom"

function DogList( {names, imageSrcs}) {
    let dogs = []
    console.log(names)
    for (let i = 0; i < names.length; i++){
        let dog = {}
        let img = imageSrcs.filter(src => src.includes(names[i].toLowerCase()))
        dog.name = names[i]
        dog.img = img[0]
        dogs.push(dog)
    }

    console.log(dogs, "this is dogjects")

    return(
        <div>
            {dogs.map(dog => <div>
                
                                <img src={dog.img}></img>
                                    <h3> {dog.name} </h3>       
                </div>

                
                
                )}

        </div>
    )
}

export default DogList;