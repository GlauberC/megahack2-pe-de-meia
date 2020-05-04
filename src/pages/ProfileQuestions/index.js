import React, {useState, useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {
  Container,
  TextQuetion,
  ViewOptions,
  OptionContainer,
  OptionText,
  ViewBar,
  BarDescription,
  BarContainer,
  BarProgress,
  BackButton,
  BackButtonText,
} from './styles';

import dataQuestion from '../../dataTemp/profileQuestions';

const ProfileQuestions = () => {
  const navigation = useNavigation();

  const [questions, setQuestions] = useState([]);
  const [totalQuestion, setTotalQuestion] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    function loadQuestions() {
      // Integration with database
      setTotalQuestion(dataQuestion.numberQuestions);
      setQuestions(dataQuestion.questions);
      setAnswers(dataQuestion.answers);
    }
    loadQuestions();
  }, []);

  function navigateToResultProfile() {
    navigation.navigate('ResultProfile');
  }

  function nextQuestion() {
    if (activeQuestion + 1 < totalQuestion) {
      setActiveQuestion(activeQuestion + 1);
    } else {
      // TODO: Integration with database
      // TODO: Calculate score
      navigateToResultProfile();
    }
  }

  function choiceQuestion(option) {
    setAnswers(
      answers.map((ans, index) => {
        if (index === activeQuestion) {
          return option;
        } else {
          return ans;
        }
      }),
    );
    nextQuestion();
  }

  function previousQuestion() {
    if (activeQuestion > 0) {
      setActiveQuestion(activeQuestion - 1);
    }
  }

  return (
    <Container>
      {questions.length > 0 && (
        <>
          <TextQuetion>{`${questions[activeQuestion].id + 1}. ${
            questions[activeQuestion].question
          }`}</TextQuetion>
          <ViewOptions>
            <OptionContainer onPress={() => choiceQuestion(0)}>
              <OptionText>{questions[activeQuestion].option1}</OptionText>
            </OptionContainer>
            <OptionContainer onPress={() => choiceQuestion(1)}>
              <OptionText>{questions[activeQuestion].option2}</OptionText>
            </OptionContainer>
            <OptionContainer onPress={() => choiceQuestion(2)}>
              <OptionText>{questions[activeQuestion].option3}</OptionText>
            </OptionContainer>
          </ViewOptions>
          <ViewBar>
            <BarDescription>Vamos nos conhecer um pouco?</BarDescription>
            <BarContainer>
              <BarProgress
                questionPercent={((activeQuestion + 1) * 100) / totalQuestion}
              />
            </BarContainer>
          </ViewBar>
          {activeQuestion > 0 && (
            <BackButton onPress={previousQuestion}>
              <BackButtonText>Voltar</BackButtonText>
            </BackButton>
          )}
        </>
      )}
    </Container>
  );
};

export default ProfileQuestions;
