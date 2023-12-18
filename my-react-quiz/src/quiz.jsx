import React, { useEffect } from 'react';

const QUIZ_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/quiz';

export default function Quiz() {

    useEffect(() => {
        const [questions, setQuestions] = useState(null);
            const callFetch = async () => {
            const response = await fetch(QUIZ_API_BASE_URL);
            const jsonResponse = await response.json();
            
        }
    }, [])

  return (
    <>
    
    </>
  );
}