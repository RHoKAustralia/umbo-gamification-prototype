type Answer = {
    id: string;
    imageUrl: string;
    text: string;
};

type Question = {
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
    }
];

export default {
    questions
};
