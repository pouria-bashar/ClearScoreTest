import { getScoreForUser, __RewireAPI__ as CreditScoreServiceRewireAPI } from './credit-score-service';
import sinon from 'sinon';

describe('Credit Score Service', () => {

  afterEach(() => {
    CreditScoreServiceRewireAPI.__ResetDependency__('fetch');
  });

  describe('getScoreForUser', () => {
    it('should eventually return the score for the first user in the JSON', () => {
      const fetchStub = sinon.stub().returns(Promise.resolve({
        json: () => {
          return [
            {
              score: 520
            }
          ]
        }
      }));

      CreditScoreServiceRewireAPI.__Rewire__('fetch', fetchStub);

      return expect(getScoreForUser()).to.eventually.equal(520);
    });

    it('should throw an error if a bad status code is returned', () => {
      const fetchStub = sinon.stub().returns(Promise.resolve({
        status: 404
      }));

      CreditScoreServiceRewireAPI.__Rewire__('fetch', fetchStub);
      return expect(getScoreForUser()).to.eventually.have.property('message', 'Bad response from server');
    });
  });
});
