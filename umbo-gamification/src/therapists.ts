type Interest = {
    name: string;
    imageUrl: string;
};

type Therapist = {
    name: string;
    imageUrl: string;
    interests: Interest[];
};

const minecraft = {
    name: "minecraft",
    imageUrl: "/interests/minecraft.png"
};
const cars = {
    name: "cars",
    imageUrl: "/interests/car.png"
};
const soccer = {
    name: "soccer",
    imageUrl: "/interests/soccer.png"
};
const dogs = {
    name: "dogs",
    imageUrl: "/interests/dog.jpg"
};
const dora = {
    name: "dora the explorer",
    imageUrl: "/interests/dora.jpg"
};
const cats = {
    name: "cats",
    imageUrl: "/interests/cat.jpg"
};
const barbies = {
    name: "barbies",
    imageUrl: "/interests/barbie.jpg"
};

const therapists: Therapist[] = [
    {
        name: "Sam",
        imageUrl: "/therapists/sam.jpg",
        interests: [minecraft, cars, soccer]
    },
    {
        name: "Ursula",
        imageUrl: "/therapists/ursula.jpg",
        interests: [dogs, soccer, dora]
    },
    {
        name: "Bob",
        imageUrl: "/therapists/bob.jpg",
        interests: [cats, barbies, minecraft]
    }
];

export default therapists;
