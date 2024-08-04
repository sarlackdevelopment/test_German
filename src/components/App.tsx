import React, { FC, useState } from 'react';
import { Container, Card, Button, ListGroup } from 'react-bootstrap';
import { Section, Question, Option } from '../types';
import germanTest from '../api/data';
import '../main.scss';

interface QuizSectionProps {
    section: Section;
}

const QuizSection: FC<QuizSectionProps> = ({ section }) => {
    const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: number | null }>({});
    const [correctAnswers, setCorrectAnswers] = useState<{ [key: number]: number | null }>({});
    const [showRussianText, setShowRussianText] = useState<boolean[]>(Array(section.questions.length).fill(false));

    const handleOptionClick = (questionIndex: number, optionIndex: number, isCorrect: boolean) => {
        setSelectedOptions({
            ...selectedOptions,
            [questionIndex]: optionIndex
        });
        if (isCorrect) {
            setCorrectAnswers({
                ...correctAnswers,
                [questionIndex]: optionIndex
            });
        } else {
            setCorrectAnswers({
                ...correctAnswers,
                [questionIndex]: section.questions[questionIndex].options.findIndex((opt) => opt.correct)
            });
        }
    };

    const toggleRussianText = (index: number) => {
        const newShowRussianText = [...showRussianText];
        newShowRussianText[index] = !newShowRussianText[index];
        setShowRussianText(newShowRussianText);
    };

    return (
        <Container className="mt-5">
            { section.questions.map((question: Question, qIndex: number) => (
                <Card className="mb-3" key={ qIndex }>
                    <Card.Body>
                        <Card.Title>{ question.question.de }</Card.Title>
                        <Button
                            variant="secondary"
                            onClick={ () => toggleRussianText(qIndex) }
                            className="mb-2"
                        >
                            { showRussianText[qIndex] ? 'Скрыть русский текст' : 'Показать русский текст' }
                        </Button>
                        { showRussianText[qIndex] && (
                            <Card.Subtitle className="mb-2 text-muted">{ question.question.ru }</Card.Subtitle>
                        ) }
                        <ListGroup>
                            { question.options.map((option: Option, oIndex: number) => (
                                <ListGroup.Item
                                    key={ oIndex }
                                    onClick={ () => handleOptionClick(qIndex, oIndex, !!option.correct) }
                                    style={ {
                                        cursor: 'pointer',
                                        backgroundColor:
                                            selectedOptions[qIndex] === oIndex
                                                ? option.correct
                                                    ? 'lightgreen'
                                                    : 'lightcoral'
                                                : correctAnswers[qIndex] === oIndex
                                                    ? 'lightgreen'
                                                    : 'white'
                                    } }
                                >
                                    { option.de } / { showRussianText[qIndex] && option.ru }
                                </ListGroup.Item>
                            )) }
                        </ListGroup>
                    </Card.Body>
                </Card>
            )) }
        </Container>
    );
};

const App: FC = () => {
    const [currentSection, setCurrentSection] = useState(0);

    return (
        <div>
            <QuizSection section={ germanTest[currentSection] } />
            <Container className="d-flex justify-content-between mt-3">
                { currentSection > 0 && (
                    <Button onClick={ () => setCurrentSection(currentSection - 1) }>Previous Section</Button>
                ) }
                { currentSection < germanTest.length - 1 && (
                    <Button onClick={ () => setCurrentSection(currentSection + 1) }>Next Section</Button>
                ) }
            </Container>
        </div>
    );
};

export default App;
