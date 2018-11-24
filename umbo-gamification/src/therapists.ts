type Therapist = {
    name: string;
    imageUrl: string;
    interests: string[];
};

const therapists: Therapist[] = [
    {
        name: "Sam",
        imageUrl: "/therapists/sam.jpg",
        interests: ["minecraft", "cars", "soccer"]
    },
    {
        name: "Ursula",
        imageUrl: "/therapists/ursula.jpg",
        interests: ["dogs", "soccer", "dora the explorer"]
    },
    {
        name: "Bob",
        imageUrl: "/therapists/bob.jpg",
        interests: ["cats", "barbies", "minecraft"]
    }
];

export default therapists;
