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
                imageUrl: "/desert.jpg",
                text: "I have brothers and sisters"
            },
            {
                id: "noSiblings",
                imageUrl: "/desert.jpg",
                text: "I have no brothers or sisters"
            }
        ]
    },

    {
        id: "school",
        answers: [
            {
                id: "goesToSchool",
                imageUrl: "/desert.jpg",
                text: "I go to school"
            },
            {
                id: "noSchool",
                imageUrl: "/desert.jpg",
                text: "I do not go to school"
            }
        ]
    },
    {
        id: "country",
        answers: [
            {
                id: "livesInCountry",
                imageUrl: "/desert.jpg",
                text: "I live in the country"
            },
            {
                id: "doesNotLiveInCountry",
                imageUrl: "/desert.jpg",
                text: "I do not live in the country"
            }
        ]
    },
    {
        id: "sport",
        answers: [
            {
                id: "playsSport",
                imageUrl: "/desert.jpg",
                text: "I play sport"
            },
            {
                id: "doesNotPlaySport",
                imageUrl: "/desert.jpg",
                text: "I do not play sport"
            }
        ]
    },
    {
        id: "tvOrBooks",
        answers: [
            {
                id: "prefersTV",
                imageUrl: "/desert.jpg",
                text: "I like TV"
            },
            {
                id: "prefersBooks",
                imageUrl: "/desert.jpg",
                text: "I like books"
            }
        ]
    }
];

export default {
    questions
};
