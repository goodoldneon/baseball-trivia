import { expect } from 'chai';

import trivia from '../../src/data/trivia';

describe('trivia object (src/data/trivia.js)', () => {
  it('is an object', () => {
    expect(trivia).to.be.a('object');
  });

  describe('has a "question" property', () => {
    const { question } = trivia;

    it(`which is a string`, () => {
      expect(question).to.be.a('string');
    });
  });

  describe('has an "answers" property', () => {
    const { answers } = trivia;

    it(`which is an array`, () => {
      expect(answers).to.be.a('array');
    });

    describe('where each item', () => {
      it(`has a "lastName" property, which is a string`, () => {
        answers.map((answer) => expect(answer.lastName).to.be.a('string'));
      });

      it(`has a "fullName" property, which is a string`, () => {
        answers.map((answer) => expect(answer.fullName).to.be.a('string'));
      });

      it(`has a "link" property, which is a string`, () => {
        answers.map((answer) => expect(answer.link).to.be.a('string'));
      });
    });

    //   // it(`only contains objects`)
  });
});
