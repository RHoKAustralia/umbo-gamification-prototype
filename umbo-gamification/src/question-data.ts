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
                text: "I have a brother or sister"
            },
            {
                id: "noSiblings",
                imageUrl: "http://blah",
                text: "I have no brother or sister"
            }
        ]
    },
    {
        id: "daycare",
        answers: [
            {
                id: "goesToDaycare",
                imageUrl: "http://blah",
                text: "I go to daycare"
            },
            {
                id: "noDaycare",
                imageUrl: "http://blah",
                text: "I do not go to daycare"
            }
        ]
    }
];

export default {
    questions
};
