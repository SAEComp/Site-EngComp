import { Box } from "@mui/material";
import Counter from "./Counter";
import { IQuestionProps } from "./types";
import Questions from './Questions';
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { useSprings, animated } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';


const QuestionsContainer: React.FC<IQuestionProps> = ({ setCurrentQuestion, updateQuestion, formState, teachers, courses }) => {
    const [questionsHeight, setQuestionsHeight] = useState<number>(0);
    const questionsRef = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState<number>(window.innerWidth);


    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useLayoutEffect(() => {
        if (questionsRef.current) {
            const { height } = questionsRef.current.getBoundingClientRect();
            setQuestionsHeight(height);
        }
    }, [formState.currentQuestion, width]);

    const lockScroll = (lock: boolean) => {
        document.body.style.overflow = lock ? 'hidden' : 'auto';
    };

    const [springs, api] = useSprings(
        formState.totalQuestions,
        (i: number) => ({
            x: (i - formState.currentQuestion) * width,
            display: 'block',
            immediate: width === 0,
        }),
        [width, formState.currentQuestion]
    );

    const bind = useDrag(
        ({
            active,
            movement: [mx],
            direction: [xDir],
            distance,
            cancel,
            velocity,
            memo = formState.currentQuestion,
        }) => {
            lockScroll(active);

            const dir = xDir > 0 ? -1 : 1;
            const newIndex = memo + dir;

            const triggerThreshold = velocity > 0.2 || distance > width / 3;

            if (!active && triggerThreshold) {
                if (newIndex >= 0 && newIndex < formState.totalQuestions) {
                    setCurrentQuestion(newIndex);
                    cancel();
                }
            }

            api.start((i: number) => {
                if (i < formState.currentQuestion - 1 || i > formState.currentQuestion + 1) {
                    return { display: 'none' };
                }

                let x = (i - formState.currentQuestion) * width + (active ? mx : 0);

                if (
                    (formState.currentQuestion === 0 && mx > 0) ||
                    (formState.currentQuestion === formState.totalQuestions - 1 && mx < 0)
                ) {
                    x = (i - formState.currentQuestion) * width;
                }

                return { x, display: 'block' };
            });

            return memo;
        },
        { axis: 'x', filterTaps: true, pointer: { touch: true } }
    );

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'white',
                width: '100%',
                borderRadius: '51px',
                padding: { xs: '20px', md: '50px' },
                gap: '20px',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Counter
                setCurrentQuestion={setCurrentQuestion}
                totalQuestions={formState.totalQuestions}
                currentQuestion={formState.currentQuestion}
            />

            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: `${questionsHeight}px`,
                    overflow: 'hidden',
                }}
                {...bind()}
            >
                {springs.map(({ x, display }, i: number) => (
                    <animated.div
                        key={i}
                        style={{
                            display,
                            position: 'absolute' as 'absolute',
                            width: '100%',
                            height: '100%',
                            willChange: 'transform',
                            transform: x.to((x) => `translate3d(${x}px,0,0)`),
                        }}
                    >
                        <Box
                            ref={i === formState.currentQuestion ? questionsRef : null}
                        >
                            <Questions
                                updateQuestion={updateQuestion}
                                questionIndex={i}
                                formState={formState}
                                teachers={teachers}
                                courses={courses}
                            />
                        </Box>
                    </animated.div>
                ))}
            </Box>

            <Counter
                setCurrentQuestion={setCurrentQuestion}
                totalQuestions={formState.totalQuestions}
                currentQuestion={formState.currentQuestion}
            />
        </Box>
    );
};

export default QuestionsContainer;
