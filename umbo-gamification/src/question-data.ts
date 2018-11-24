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
                imageUrl: "http://blah",
                text: "I have brothers and sisters"
            },
            {
                id: "noSiblings",
                imageUrl: "http://blah",
                text: "I have no brothers or sisters"
            }
        ]
    },

    {
        id: "school",
        answers: [
            {
                id: "goesToSchool",
                imageUrl: "http://blah",
                text: "I go to school"
            },
            {
                id: "noSchool",
                imageUrl: "http://blah",
                text: "I do not go to school"
            }
        ]
    },
    {
        id: "country",
        answers: [
            {
                id: "livesInCountry",
                imageUrl: "http://blah",
                text: "I live in the country"
            },
            {
                id: "doesNotLiveInCountry",
                imageUrl: "http://blah",
                text: "I do not live in the country"
            }
        ]
    },
    {
        id: "sport",
        answers: [
            {
                id: "playsSport",
                imageUrl: "http://blah",
                text: "I play sport"
            },
            {
                id: "doesNotPlaySport",
                imageUrl: "http://blah",
                text: "I do not play sport"
            }
        ]
    },
    {
        id: "tvOrBooks",
        answers: [
            {
                id: "prefersTV",
                imageUrl: "http://blah",
                text: "I like TV"
            },
            {
                id: "prefersBooks",
                imageUrl: "http://blah",
                text: "I like books"
            }
        ]
    }
];

export default {
    questions
};
