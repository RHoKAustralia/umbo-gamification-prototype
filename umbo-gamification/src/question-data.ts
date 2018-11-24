export type Answer = {
    id: string;
    imageUrl: string;
    text: string;
};

export type Question = {
    id: string;
    answers: [Answer, Answer];
};

const questions: Question[] = [
    {
        id: "siblings",
        answers: [
            {
                id: "hasSiblings",
                imageUrl: "/answers/siblings.jpg",
                text: "I have brothers and sisters"
            },
            {
                id: "noSiblings",
                imageUrl: "/answers/only-child.jpg",
                text: "I have no brothers or sisters"
            }
        ]
    },

    {
        id: "school",
        answers: [
            {
                id: "goesToSchool",
                imageUrl: "/answers/to-sch.jpg",
                text: "I go to school"
            },
            {
                id: "noSchool",
                imageUrl: "/answers/no-sch.jpg",
                text: "I do not go to school"
            }
        ]
    },
    {
        id: "country",
        answers: [
            {
                id: "livesInCountry",
                imageUrl: "/answers/country.jpg",
                text: "I live in the country"
            },
            {
                id: "livesInCity",
                imageUrl: "/answers/city.jpg",
                text: "I live in the city"
            }
        ]
    },
    {
        id: "sport",
        answers: [
            {
                id: "playsSport",
                imageUrl: "/answers/sports.jpg",
                text: "I play sport"
            },
            {
                id: "doesNotPlaySport",
                imageUrl: "/answers/no-sports.jpg",
                text: "I do not play sport"
            }
        ]
    },
    {
        id: "tvOrBooks",
        answers: [
            {
                id: "prefersTV",
                imageUrl: "/answers/tv.jpg",
                text: "I like TV"
            },
            {
                id: "prefersBooks",
                imageUrl: "/answers/books.jpg",
                text: "I like books"
            }
        ]
    }
];

export default {
    questions
};
