import { useState, Dispatch, SetStateAction, createContext } from "react";

interface TimerContextType {
    duration: number;
    setDuration: Dispatch<SetStateAction<number>>;
}

export const TimerContext = createContext<TimerContextType>({
    duration: 0,
    setDuration: () => {}
});

interface TimerProviderProps {
    children: React.ReactNode;
}

export const TimerProvider = ({ children }: TimerProviderProps) => {
    const [duration, setDuration] = useState(0);

    return (
        <TimerContext.Provider value={{ duration, setDuration }}>
            {children}
        </TimerContext.Provider>
    );
};