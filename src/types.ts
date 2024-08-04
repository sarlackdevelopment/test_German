export interface Option {
    de: string;
    ru: string;
    correct?: boolean;
}

export interface Question {
    question: {
        de: string;
        ru: string;
    };
    options: Option[];
}

export interface Section {
    section: number;
    questions: Question[];
}
